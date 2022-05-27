<template>
	<div>
		<Breadcrumb itemLink="quadra" />

		<FVMR v-if="$route.params.slug == 'fvmr'" :dados="QuemSomos" />
		<Gestao v-if="$route.params.slug == 'gestao'" :dados="QuemSomos" />
		
		<h1 class="text-4xl"> - {{$route.params.slug}}</h1>

	</div>
</template>

<script>
	import { QuemSomos } from '/static/quemsomos/quemsomos'
	import FVMR from './pagecomps/fvmr'
	import Gestao from './pagecomps/gestao.vue'

	export default {
		components: { FVMR, Gestao },
		data(){
			return {
				QuemSomos
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>