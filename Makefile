app := portfolio-06
image := registry.digitalocean.com/platform/$(app)
tag := latest

.PHONY: build-workflow
build-workflow: .github/workflows/workflow.yaml

.github/workflows/workflow.yaml: .platform-workflow/workflow.m4
	@cd .platform-workflow && \
	  $(MAKE) application=${app} output=../.github/workflows/workflow.yaml

.PHONY: build
build: Dockerfile
	docker build \
	  -t $(image):$(tag) \
	  -t $(image):latest .

.PHONY: push
push: Dockerfile
	docker push $(image):$(tag)
	docker push $(image):latest
