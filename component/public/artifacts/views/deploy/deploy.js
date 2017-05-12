application.views.DeploymentDeploy = Vue.extend({
	template: "#deploymentDeploy",
	data: function() {
		return {
			file: null,
			information: null,
			running: false
		};
	},
	methods: {
		selectFiles: function(event) {
			var files = event.target.files || event.dataTransfer.files;
			if (files) {
				this.file = files.item(0);
			}
		},
		deploy: function() {
			var self = this;
			this.running = true;
			nabu.utils.ajax({
				method: "post",
				url: "${server.root()}api/deployment/deploy",
				data: self.file,
				success: function(response) {
					var result = JSON.parse(response.responseText);
					console.log("RESULT: ", result);
					if (result.information) {
						self.information = result.information;
					}
					self.running = false;
				},
				error: function(response) {
					self.running = false;
				}
			});
			self.file = null;
		}
	},
	computed: {
		status: function() {
			if (this.information == null) {
				return null;
			}
			var result = "succeeded";
			for (var i = 0; i < this.information.results; i++) {
				if (this.information.results[i].error) {
					result = "failed";
					break;
				}
			}
			return result;
		},
		errors: function() {
			var result = [];
			if (this.information == null) {
				return result;
			}
			for (var i = 0; i < this.information.results; i++) {
				if (this.information.results[i].error) {
					result.push(this.information.results[i].error);
				}
			}
			return result;
		}
	}
});