<template>
	<div >
		
		<pre>{{classificacao.length}}</pre>
		<pre class="text-xs leading-3">{{classificacao}}</pre>
		<!-- <pre>{{c50.length}}</pre> -->
		<!-- <pre class="text-xs">{{c50}}</pre> -->

		<div class="hidden">
			<div class="font-black text-xl text-center text-gray-400 mb-2">Resultados dos Últimos Jogos</div>
			<ItemJogo :jogos="jogosResults" class="mb-6" />

			<div class="font-black text-xl text-center text-gray-400 mb-2">Próximos Jogos</div>
			<ItemJogo :jogos="proximosJogos" class="mb-6" />
		</div>

	</div>
</template>

<script>
	import DataJogos from '@/static/jogos_quadra_estadual.json'
	import _, { map } from 'underscore'
	import moment from 'moment'
	import ItemJogo from './itemjogo'
	
	export default {
		components: { ItemJogo },
		props: ['temporada', 'competicao'],
		data(){
			return {
				DataJogos,
				d1: moment().subtract(moment().day() + 3, 'days').format("YYYY-MM-DD"),
				d2: moment().add(moment().day() - 3, 'days').format("YYYY-MM-DD"),
				d3: moment().subtract(moment().day() + 10, 'days').format("YYYY-MM-DD"),
				d4: moment().subtract(moment().day() + 4, 'days').format("YYYY-MM-DD"),
			}
		},
		computed: {
			classificacao(){
				return this.$classicacao( this.DataJogos )
			},
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
			jogosMasculino(){
				let arr = DataJogos.filter(j => j.pontos1 )
				let jogos = _.groupBy(arr, i => i.genero)['Masculino']
				let categorias = _.groupBy(jogos, i => i.categoria)
				return categorias
			},
			c50(){
				let arr0 = this.jogosMasculino['50+']
				let arr1 = arr0.map( i => {
					let obj = {}
					obj['equipe'] = i.equipe1
					return obj
				})
				let arr2 = arr0.map( i => {
					let obj = {}
					obj['equipe'] = i.equipe2
					return obj
				})

				let arr3 = [...arr1, ...arr2]
				let arr4 = _.uniq(arr3, true, i => i.equipe)
				let arr5 = arr4.map( i => {
						let p1 = _.map(_.where(arr0, {equipe1: i.equipe}), e => e.pontos1)
						let p2 = _.map(_.where(arr0, {equipe2: i.equipe}), e => e.pontos2)
						let obj = {scores: [...p1, ...p2]}
						let n = {...i, ...obj}
						return n 
					}
				)

				return arr5
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>