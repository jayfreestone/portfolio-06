on:
  push:
    branches:
      - master

jobs:
  build:
    name: Build & push
    runs-on: ubuntu-latest
    steps:
      - name: Checkout master
        uses: actions/checkout@v2
      - name: Set tag as GH SHA
        run: echo "::set-env name=IMAGE_TAG::$(echo $GITHUB_SHA | head -c7)"
patsubst(sinclude(xPrebuild), `^', `      ')
      - name: Build container image
        run: make build tag=${{ env.IMAGE_TAG }}
      - uses: GoogleCloudPlatform/github-actions/setup-gcloud@master
        with:
          version: '290.0.1'
          project_id: ${{ secrets.GCP_PROJECT_ID }}
          service_account_key: ${{ secrets.GCP_SA_KEY }}
          export_default_credentials: true
      - name: Authenticate with registry
        run: gcloud auth configure-docker
      - name: Push image to GCR
        run: make push tag=${{ env.IMAGE_TAG }}
      - name: Persist tag
        run: echo ${{ env.IMAGE_TAG }} > tag
      - name: Upload tag
        uses: actions/upload-artifact@v1
        with:
          name: build
          path: tag
  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Download tag
        uses: actions/download-artifact@v1
        with:
          name: build
      - name: Set env var from tag
        run: |
          echo "::set-env name=IMAGE_TAG::$(cat build/tag)"
          rm -rf build
      - name: Checkout platform
        uses: actions/checkout@v2
        with:
          repository: jayfreestone/platform
          token: ${{ secrets.PAT_GITHUB }}
      - name: Update tag on platform
        uses: stefanprodan/kube-tools@v1
        with:
          kustomize: 3.4.0
          command: |
            cd applications
            make tag application="xApplication" tag=${{ env.IMAGE_TAG }}
      - name: Commit to platform
        uses: stefanzweifel/git-auto-commit-action@v4.1.6
        with:
          commit_message: Update xApplication tag to ${{ env.IMAGE_TAG }}
          commit_user_name: Github
          commit_user_email: mail@jayfreestone.com
          commit_author: Jay <mail@jayfreestone.com>
