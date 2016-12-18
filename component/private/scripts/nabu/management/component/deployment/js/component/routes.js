application.services.router.register({
	alias: "deploymentDeploy",
	enter: function() {
		return new application.views.DeploymentDeploy();
	},
	url: "/deployment/deploy"
});