<template>
	<div>

		<div 
			v-for="jogos in jogosSel" :key="jogos.date" 
			class="pt-4"
		>
			
			<ItemJogo :jogos="jogos" class="mb-6" />

		</div>

		<div 
			v-for="jogos in jogosResults" :key="jogos.date" 
			class="pt-4"
		>

			<ItemJogo :jogos="jogos" class="mb-6" />
			
		</div>
	
	</div>
</template>

<script>
	import { Jogos } from '@/components/jogos/jogos_teste'
	import _, { map } from 'underscore'
	import ItemJogo from './itemjogo'
	
	export default {
		components: { ItemJogo },
		data(){
			return {
				Jogos
			}
		},
		computed: {
			jogosSel(){
				return Jogos.slice(0, 2)
			},
			jogosResults(){
				return Jogos.slice(2, 4)
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>