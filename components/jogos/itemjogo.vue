<template>
	<div>

		<div v-for="(d, k) in DiasDeJogos" :key="k" class="mb-6">

			<div class="mb-2 flex bg-indigo-900 border-b-2 border-indigo-900">
				<div class="bg-white px-2 pt-1 font-inter-800 font-black uppercase text-gray-700">
					{{d|dataBr}}
				</div>

				<svg class="w-4 h-8" viewBox="0 0 75 120" fill="#fff" preserveAspectRatio="none" aria-hidden="true">
					<polygon points="0 60 0 .27 75 0 75 0 0 120 0 119.73 0 60" />
				</svg>

				<!-- <div class="px-4 pt-1 font-inter-500 uppercase text-white">
					{{d}}
				</div> -->

			</div>

			<div class="grid grid-cols-2 gap-3">

				<div v-for="item in jogos[d]" :key="item.hora" v-if="item.equipe1 != null && item.equipe2 != null">
					<div class="px-3 border border-gray-300 rounded-lg flex items-center bg-white shadow-md">
						<div class="m-2 w-full text-center text-gray-600">
							<div class="text-xs uppercase">
								{{item.hora}} - {{item.local}}
							</div>
							<div class="text-xs uppercase font-black">
								{{item.genero}} {{item.categoria}} 
							</div>
							<Partida :dados="item" />
						</div>
					</div>
				</div>

			</div>


		</div>

	</div>
</template>

<script>
	import moment from 'moment'
	import Partida from './partida'

	export default {
		components: { Partida },
		props: ['jogos'],
		filters: {
			dataBr(data){
				return moment(data).format('dddd, D MMMM')
			}
		},
		computed: {
			DiasDeJogos(){
				return Object.keys(this.jogos)
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>