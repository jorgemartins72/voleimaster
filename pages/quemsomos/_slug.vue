<template>
	<div>
		<Breadcrumb itemLink="quadra" />

		<FVMR v-if="$route.params.slug == 'fvmr'" :dados="QuemSomos" />
		<Gestao v-if="$route.params.slug == 'gestao'" :dados="QuemSomos" />
		<Transparencia v-if="$route.params.slug == 'transparencia'" />

	</div>
</template>

<script>
	import { QuemSomos } from '/static/quemsomos/quemsomos'
	import FVMR from './pagecomps/fvmr'
	import Gestao from './pagecomps/gestao.vue'
	import Transparencia from './pagecomps/transparencia.vue'

	export default {
		components: { FVMR, Gestao, Transparencia },
		data(){
			return {
				QuemSomos
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>