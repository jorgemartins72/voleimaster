<template>
	<div>

		<Breadcrumb itemLink="praia" />

		<h1 class="text-4xl"> - {{$route.params.slug}}</h1>

	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
	h1 {
		text-transform: uppercase;
	}
</style>