<template>
	<div>
		<div class="mb-8 text-lg font-black" v-for="temporada in rank" :key="temporada.nome">
			<!-- Temporada {{temporada.nome}} -->
			<div class="mb-8" v-for="turno in temporada.turnos" :key="turno.nome">
				<div class="text-xl font-bold">
					Classificação {{turno.nome|nome_turno}}
				</div>
				<div class="mb-8" v-for="genero in turno.generos" :key="genero.nome">
					<div class="mb-8" v-for="categoria in genero.categorias" :key="categoria.nome">
						<div class="border border-gray-300 rounded-lg bg-gray-300 overflow-hidden">
							<div class="text-sm px-2 py-1">{{categoria.nome}} {{genero.nome}}</div>
							<div class="bg-white rounded-lg">
								<div v-for="grupo in categoria.grupos" :key="grupo.nome" class="pb-2">
									<div class="text-center">{{grupo.nome|nome_grupo}}</div>
									<div class="text-xs font-extralight text-center grid grid-cols-12 text-gray-500">
										<div class="col-span-4 text-left pl-2">equipes</div>
										<div>pts</div>
										<div>jogos</div>
										<div>vitorias</div>
										<div>derrotas</div>
										<div>w.o.</div>
										<div>sets pro</div>
										<div>sets contra</div>
										<div>sets avg</div>
									</div>

									<div 
										class="grid grid-cols-12 text-sm font-light text-center" 
										v-for="(equipe, k) in ordemByPontos(grupo.equipes)" :key="k"
										:class="{'bg-gray-200': k % 2 === 0}"
									>

										<div class="col-span-4 pl-2 font-semibold text-left text-gray-800">{{equipe.nome}}</div>
										<div class="border-l border-gray-400 text-center font-semibold text-gray-800">{{equipe.scores.pontos}}</div>
										<div class="border-l border-gray-400">{{equipe.scores.total_jogos}}</div>
										<div class="border-l border-gray-400">{{equipe.scores.vitorias}}</div>
										<div class="border-l border-gray-400">{{equipe.scores.derrotas}}</div>
										<div class="border-l border-gray-400">{{equipe.scores.total_wo}}</div>
										<div class="border-l border-gray-400">{{equipe.scores.total_setspro}}</div>
										<div class="border-l border-gray-400">{{equipe.scores.total_setscontra}}</div>
										<div class="border-l border-gray-400">{{equipe.scores.avg}}</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
	import _, { map } from 'underscore'

	export default {
		props: ['rank'],
		computed: {
			turnos() {
				return this.rank.temporadas[0]['2022'].turnos
			},
			gerenos(){
				let t = this.turnos.map( i => Object.keys(i) )
				// let g = t.map( i => this.turnos[i].gerenos )
				let g = this.turnos[0]

				return g
			}
		},
		filters: {
			nome_turno(s){
				return (s == 'primeiro' || s == 'segundo') ? `${s.charAt(0).toUpperCase() + s.slice(1)} Turno` : s
			},
			nome_grupo(s){
				return (s == 'A' || s == 'B') ? `Grupo ${s.charAt(0).toUpperCase() + s.slice(1)}` : s
			},
		},
		methods: {
			ordemByPontos(arr){
				return arr.sort((a, b) => {
					if (a.scores.pontos < b.scores.pontos) {
						return 1;
					}
					if (a.scores.pontos > b.scores.pontos) {
						return -1;
					}
					// a must be equal to b
					return 0;
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>