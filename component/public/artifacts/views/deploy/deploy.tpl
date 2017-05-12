<template id="deploymentDeploy">
	<div class="deploymentDeploy">
		<h1 class="title">Deploy</h1>
		<div class="file">
			<input type="file" v-on:change="selectFiles"/>
			<button :disabled="file == null" v-on:click="deploy()">Deploy</button>
		</div>
		<div class="state">
			<p v-show="running">Deployment is running...</p>
			<div v-show="!running">
				<p v-show="status == 'succeeded'">Deployment succeeded!</p>
				<div v-show="status == 'failed'">
					<p>Deployment failed</p>
					<p v-for="error in errors">{{ error }}</p>
				</div>
			</div>
		</div>
	</div>
</template>