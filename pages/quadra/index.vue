<template>
	<div class="">
		<Breadcrumb itemLink="quadra" />
		<pre>{{competicoes_quadra}}</pre>
		<pre>{{competicoes_praia}}</pre>
	</div>
</template>

<script>
	import { competicoes_quadra, competicoes_praia } from '/data/data'
	export default {
		data() {
			return {
				competicoes_praia,
				competicoes_quadra,
			}
		}
	}
</script>

<style lang="scss" scoped>
h1 {
	text-transform: uppercase;
}
</style>