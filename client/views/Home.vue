<style scoped>
</style>

<template>
	<section class="hero is-fullheight is-medium has-text-centered">
		<div class="hero-body">
			<div class="container">
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {}
		},
		mounted() {
			this.$Progress.finish();
		},
		name: 'home'
	}
</script>
