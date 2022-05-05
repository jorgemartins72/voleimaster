<template>
	<div>
		<Breadcrumb itemLink="quadra" />
		<h1 class="font-inter-800 font-black text-2xl text-gray-600 mb-4">Voleibol de Quadra</h1>
		<div class="md:px-8 lg:px-16">
			<PageComissao 
				v-if="$route.params.slug == 'comissao'" 
				:comissao="ComissaoDeQuadra"
			/>
		</div>

	</div>
</template>

<script>
	import { ComissaoDeQuadra } from '/data/data'
	import PageComissao from './componente_comissao.vue'

	export default {
		components: { PageComissao },
		data(){
			return {
				ComissaoDeQuadra
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>