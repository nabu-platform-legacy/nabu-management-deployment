application.initialize.modules.push(function() {
	application.services.vue.menu.push({
		title: "Deployer",
		children: [{
			title: "Deploy",
			handle: function() {
				application.services.router.route("deploymentDeploy");
			}
		}]
	});
});