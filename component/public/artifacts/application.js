application.configuration.modules.push(function($services) {
	$services.manager.menu({
		title: "Deployer",
		actions: [{
			title: "Deploy",
			handler: function() {
				$services.router.route("deploymentDeploy");
			}
		}]
	});
	$services.router.register({
		alias: "deploymentDeploy",
		enter: function() {
			return new application.views.DeploymentDeploy();
		},
		url: "/deployment/deploy"
	});
});