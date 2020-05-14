# Platform workflow

A generic `workflow.yaml` for use with Github Actions. Designed to be used as submodule/subtree inside a project.

## Setup

The workflow requires the following secrets be set up for the repository:

- `APPLICATION`: The application 'name' used for both the folder in the platform's `applications` directory, as well as the container repository. Example: `damascus-road`.
- `PAT_GITHUB`: A Github [personal access token](https://github.com/settings/tokens) with the ability to write to the [platform repository](https://github.com/jayfreestone/platform).
- `DIGITALOCEAN_ACCESS_TOKEN`: A Digital Ocean access token used to push to the container repository.

## Building

The final `workflow.yaml` file can be built with the default `make` command.

It is possible to inject an optional 'prebuild' set of steps that are run just before the docker image is built.

You can do this by passing an `m4` template to the make command's `prebuild` variable, like so:

```
make prebuild=prebuild.m4
```

Where `prebuild.m4` might look like this:

```yaml
- name: Create dotenv file
  run: echo "ACF_PRO_KEY=${{ secrets.ACF_PRO_KEY }}" > .env
```

## Expectations

The workflow expects the following `make` targets to be defined:

- `build`: Should build and tag a Docker image.
- `push`: Should push the previously built docker images.

Example:

```makefile
app := portfolio-06
image := registry.digitalocean.com/platform/$(app)
tag := latest

.PHONY: build
build: Dockerfile
	docker build \
	  -t $(image):$(tag) \
	  -t $(image):latest .

.PHONY: push
push: Dockerfile
	docker push $(image):$(tag)
	docker push $(image):latest
```

It is expected that a matching image is defined within the application's deployment.
