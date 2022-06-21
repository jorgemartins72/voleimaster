<template>
	<div>
		<div class="mb-8 text-lg font-black" v-for="temporada in rank" :key="temporada.nome">
			<!-- Temporada {{temporada.nome}} -->
			<div class="mb-8" v-for="turno in temporada.turnos" :key="turno.nome">
				<div class="text-2xl font-bold leading-4 text-gray-700">
					Classificação {{turno.nome|nome_turno}}<br>
					<small class="font-light text-xs text-gray-500">Atualizado em {{dt_update}}</small>
				</div>
				<div class="mb-8" v-for="genero in turno.generos" :key="genero.nome">
					<div class="mb-8" v-for="categoria in genero.categorias" :key="categoria.nome">
						<div class="rounded-lg border overflow-hidden" :class="bgGenero(genero.nome)">
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
										v-for="(equipe, k) in grupo.equipes" :key="k"
										:class="{'bg-gray-200': k % 2 === 0}"
									>

										<div class="col-span-4 pl-2 font-semibold text-left text-gray-800">{{equipe.nome}}</div>
										<div class="text-center font-semibold text-gray-800">{{equipe.scores.pontos}}</div>
										<div class="">{{equipe.scores.total_jogos}}</div>
										<div class="">{{equipe.scores.vitorias}}</div>
										<div class="">{{equipe.scores.derrotas}}</div>
										<div class="">{{equipe.scores.total_wo}}</div>
										<div class="">{{equipe.scores.total_setspro}}</div>
										<div class="">{{equipe.scores.total_setscontra}}</div>
										<div class="">{{equipe.scores.avg}}</div>

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
		props: ['rank', 'dt_update'],
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
			bgGenero(genero){
				return genero == 'Masculino' ? 'border-blue-300 bg-blue-300' : 'border-red-300 bg-red-300'
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>