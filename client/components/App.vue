<style lang="scss">
	@import '~bulma';
</style>

<template>
	<div id="app">
		<router-view></router-view>
		<vue-progress-bar></vue-progress-bar>
	</div>
</template>

<script>
	export default {
		created () {
			this.$Progress.start();
		}
	}
</script>
