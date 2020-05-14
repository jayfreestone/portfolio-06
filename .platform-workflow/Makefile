default: workflow.yaml

workflow.yaml: *.m4
	@m4 -D xPrebuild=${prebuild} workflow.m4 > workflow.yaml
