<template>
	<div>
		<div class="font-black text-xl text-center text-gray-400 mb-2">Resultados dos Últimos Jogos</div>
		<ItemJogo :jogos="jogosResults" class="mb-6" />

		<div class="font-black text-xl text-center text-gray-400 mb-2">Próximos Jogos</div>
		<ItemJogo :jogos="proximosJogos" class="mb-6" />


	</div>
</template>

<script>
	import DataJogos from '@/static/jogos.json'
	import _, { map } from 'underscore'
	import moment from 'moment'
	import ItemJogo from './itemjogo'
	
	export default {
		components: { ItemJogo },
		data(){
			return {
				DataJogos,
				d1: moment().subtract(moment().day() + 3, 'days').format("YYYY-MM-DD"),
				d2: moment().add(moment().day() - 3, 'days').format("YYYY-MM-DD"),
				d3: moment().subtract(moment().day() + 10, 'days').format("YYYY-MM-DD"),
				d4: moment().subtract(moment().day() + 4, 'days').format("YYYY-MM-DD"),
			}
		},
		// mounted(){
		// 	console.clear()
		// 	console.log( this.d3, this.d4)
		// },
		computed: {
			proximosJogos(){
				let arr = DataJogos
					.filter(j => !j.pontos1 )
					.filter(j => j.data > this.d1 && j.data < this.d2 )
				
				return _.groupBy(arr, i => i.data)
			},
			jogosResults(){
				let arr = DataJogos
					.filter(j => j.pontos1 )
					.filter(j => j.data > this.d3 && j.data < this.d4 )
				return _.groupBy(arr, i => i.data)
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>