<template>
	<div class="">
		<Breadcrumb itemLink="quemsomos" />
	</div>
</template>

<script>
	
	export default {
		middleware: [
			function({ redirect }) {
				return redirect('/quemsomos/fvmr');
			},
		],
	}
</script>

<style lang="scss" scoped>
h1 {
	text-transform: uppercase;
}
</style>