<template>
	<div class="pb-12">
		<Breadcrumb itemLink="quadra" />
		<h1 class="font-inter-800 font-black uppercase text-2xl text-gray-600 mb-4">Voleibol de Praia</h1>
		<div class="md:px-8 lg:px-16">

			<div class="grid grid-cols-1 gap-4 place-content-center">
				<div class="flex flex-col">
					
					<dl class="space-y-10 md:space-y-0 grid grid-cols-1 md:gap-x-8 md:gap-y-10">
						
						<div class="relative">

							<dt>
								<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">

									<svg class="h-9 w-9 icon icon-tabler icon-tabler-ball-volleyball" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
										<circle cx="12" cy="12" r="9" />
										<path d="M12 12a8 8 0 0 0 8 4m-12.5 -2.5a12 12 0 0 0 8.5 6.5" />
										<path d="M12 12a8 8 0 0 0 8 4m-12.5 -2.5a12 12 0 0 0 8.5 6.5" transform="rotate(120 12 12)" />
										<path d="M12 12a8 8 0 0 0 8 4m-12.5 -2.5a12 12 0 0 0 8.5 6.5" transform="rotate(240 12 12)" />
									</svg>

								</div>
								<p class="ml-16 text-2xl leading-6 font-black text-gray-900">
									{{competicao.nome}}
								</p>
								<h3 class="ml-16 leading-8 text-lg font-black text-gray-400">
									Temporada {{temporada.temporada}}
								</h3>
							</dt>
							<dd class="ml-16 leading-5 text-base text-gray-500">
								{{temporada.descricao}}
							</dd>

						</div>

					</dl>

				</div>

			</div>

			<!-- Torneio de duplas  -->
			<div class="mb-3 mt-6 text-center md:text-left text-2xl leading-6 font-black text-gray-900">
				{{temporada.torneios.duplas.nome}}
			</div>
			<!-- Etapa 1  -->
			<div class="mb-3 text-center md:text-left text-xl leading-6 font-black text-gray-500">
				{{temporada.torneios.duplas.etapas[0].nome}}
			</div>
			<div class="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center md:justify-items-start">

				<itemTemporadaPraia :item="temporada.torneios.duplas.etapas[0].regulamento" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'duplas'" :etapa="temporada.torneios.duplas.etapas[0].etapa" />

				<itemTemporadaPraia :item="temporada.torneios.duplas.etapas[0].equipes" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'duplas'" :etapa="temporada.torneios.duplas.etapas[0].etapa" />

				<itemTemporadaPraia :item="temporada.torneios.duplas.etapas[0].comunicados" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'duplas'" :etapa="temporada.torneios.duplas.etapas[0].etapa" />

				<div v-for="(form, k) in temporada.torneios.duplas.etapas[0].formularios.arquivos" :key="k">
					<itemTemporadaPraia :item="form" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'duplas'" :etapa="temporada.torneios.duplas.etapas[0].etapa" />
				</div>
			</div>

			<!-- Etapa 2  -->
			<div class="mb-3 mt-6 text-center md:text-left text-xl leading-6 font-black text-gray-500">
				{{temporada.torneios.duplas.etapas[1].nome}}
			</div>
			<div class="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center md:justify-items-start">

				<itemTemporadaPraia :item="temporada.torneios.duplas.etapas[1].regulamento" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'duplas'" :etapa="temporada.torneios.duplas.etapas[1].etapa" />

				<itemTemporadaPraia :item="temporada.torneios.duplas.etapas[1].equipes" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'duplas'" :etapa="temporada.torneios.duplas.etapas[1].etapa" />

				<itemTemporadaPraia :item="temporada.torneios.duplas.etapas[1].comunicados" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'duplas'" :etapa="temporada.torneios.duplas.etapas[1].etapa" />

				<div v-for="(form, k) in temporada.torneios.duplas.etapas[1].formularios.arquivos" :key="k">
					<itemTemporadaPraia :item="form" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'duplas'" :etapa="temporada.torneios.duplas.etapas[1].etapa" />
				</div>
			</div>

			<!-- Etapa 3  -->
			<div class="mb-3 mt-6 text-center md:text-left text-xl leading-6 font-black text-gray-500">
				{{temporada.torneios.duplas.etapas[2].nome}}
			</div>
			<div class="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center md:justify-items-start">

				<itemTemporadaPraia :item="temporada.torneios.duplas.etapas[2].regulamento" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'duplas'" :etapa="temporada.torneios.duplas.etapas[2].etapa" />

				<itemTemporadaPraia :item="temporada.torneios.duplas.etapas[2].equipes" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'duplas'" :etapa="temporada.torneios.duplas.etapas[2].etapa" />

				<itemTemporadaPraia :item="temporada.torneios.duplas.etapas[2].comunicados" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'duplas'" :etapa="temporada.torneios.duplas.etapas[2].etapa" />

				<div v-for="(form, k) in temporada.torneios.duplas.etapas[2].formularios.arquivos" :key="k">
					<itemTemporadaPraia :item="form" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'duplas'" :etapa="temporada.torneios.duplas.etapas[2].etapa" />
				</div>
			</div>

			<!-- Torneio de quartetos  -->
			<div class="mb-3 mt-6 text-center md:text-left text-2xl leading-6 font-black text-gray-900">
				{{temporada.torneios.quartetos.nome}}
			</div>
			<!-- Etapa 1  -->
			<div class="mb-3 text-center md:text-left text-xl leading-6 font-black text-gray-500">
				{{temporada.torneios.quartetos.etapas[0].nome}}
			</div>
			<div class="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center md:justify-items-start">

				<itemTemporadaPraia :item="temporada.torneios.quartetos.etapas[0].regulamento" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'quartetos'" :etapa="temporada.torneios.quartetos.etapas[0].etapa" />

				<itemTemporadaPraia :item="temporada.torneios.quartetos.etapas[0].equipes" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'quartetos'" :etapa="temporada.torneios.quartetos.etapas[0].etapa" />

				<itemTemporadaPraia :item="temporada.torneios.quartetos.etapas[0].comunicados" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'quartetos'" :etapa="temporada.torneios.quartetos.etapas[0].etapa" />

				<div v-for="(form, k) in temporada.torneios.quartetos.etapas[0].formularios.arquivos" :key="k">
					<itemTemporadaPraia :item="form" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'quartetos'" :etapa="temporada.torneios.quartetos.etapas[0].etapa" />
				</div>
			</div>

			<!-- Etapa 2  -->
			<div class="mb-3 mt-6 text-center md:text-left text-xl leading-6 font-black text-gray-500">
				{{temporada.torneios.quartetos.etapas[1].nome}}
			</div>
			<div class="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center md:justify-items-start">

				<itemTemporadaPraia :item="temporada.torneios.quartetos.etapas[1].regulamento" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'quartetos'" :etapa="temporada.torneios.quartetos.etapas[1].etapa" />

				<itemTemporadaPraia :item="temporada.torneios.quartetos.etapas[1].equipes" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'quartetos'" :etapa="temporada.torneios.quartetos.etapas[1].etapa" />

				<itemTemporadaPraia :item="temporada.torneios.quartetos.etapas[1].comunicados" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'quartetos'" :etapa="temporada.torneios.quartetos.etapas[1].etapa" />

				<div v-for="(form, k) in temporada.torneios.quartetos.etapas[1].formularios.arquivos" :key="k">
					<itemTemporadaPraia :item="form" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'quartetos'" :etapa="temporada.torneios.quartetos.etapas[1].etapa" />
				</div>
			</div>

			<!-- Etapa 3  -->
			<div class="mb-3 mt-6 text-center md:text-left text-xl leading-6 font-black text-gray-500">
				{{temporada.torneios.quartetos.etapas[2].nome}}
			</div>
			<div class="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center md:justify-items-start">

				<itemTemporadaPraia :item="temporada.torneios.quartetos.etapas[2].regulamento" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'quartetos'" :etapa="temporada.torneios.quartetos.etapas[2].etapa" />

				<itemTemporadaPraia :item="temporada.torneios.quartetos.etapas[2].equipes" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'quartetos'" :etapa="temporada.torneios.quartetos.etapas[2].etapa" />

				<itemTemporadaPraia :item="temporada.torneios.quartetos.etapas[2].comunicados" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'quartetos'" :etapa="temporada.torneios.quartetos.etapas[2].etapa" />

				<div v-for="(form, k) in temporada.torneios.quartetos.etapas[2].formularios.arquivos" :key="k">
					<itemTemporadaPraia :item="form" :info="arrTempo" :temporada="temporada.temporada" :modalidade="'quartetos'" :etapa="temporada.torneios.quartetos.etapas[2].etapa" />
				</div>
			</div>

			<div class="mt-16" v-if="temporadas.length > 1">
				<div class="mb-3 text-2xl leading-6 font-black text-gray-900">
					Todas as temporadas
				</div>
				<div class="flex flex-wrap gap-4 px-12 md:px-0 justify-center md:justify-start ">

					<div 
						class="border border-gray-300 px-4 py-3 rounded-lg select-none cursor-pointer"
						v-for="(temp, k) in temporadas" :key="k"
					>
						<NuxtLink :to="`/${pathTo}/${temp.temporada}`">
							<div class="font-black text-2xl text-indigo-900">{{temp.temporada}}</div> 
						</NuxtLink>
					</div>

				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import { competicoes_praia } from '/static/data'
	export default {
		data(){
			return {
				competicoes_praia
			}
		},
		async asyncData({ params }) {
			const slug = params.slug
			return { slug }
		},
		computed:{
			arrTempo(){
				return this.$route.path.split('/').filter( i => i != '')
			},
			pathTo(){
				let newpath = [...this.arrTempo]
				return newpath.join('/')
			},
			competicao(){
				const c = competicoes_praia[this.slug]
				return {nome: c['nome'], "descricao":c['descricao']}
			},
			temporadas(){
				const t = competicoes_praia[this.slug]
				return t.temporadas
			},
			temporada(){
				return this.temporadas[0]
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>