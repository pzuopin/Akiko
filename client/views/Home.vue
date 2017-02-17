<style scoped>
</style>

<template>
	<section class="hero is-fullheight is-medium has-text-centered">
		<div class="hero-body">
			<div class="container">
				<a class="button is-primary">Akiko - A sadistic vue-boilerplate</a>
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
		head: {
			title: {
				inner: 'Home'
			}
		},
		name: 'home'
	}
</script>
