<template>
	<div class="pb-12">
		<Breadcrumb itemLink="quadra" />
		<h1 class="font-inter-800 font-black uppercase text-2xl text-gray-600 mb-4">Voleibol de Quadra</h1>
		
		<div class="md:px-8 lg:px-16">


			<div class="grid grid-cols-1 gap-4 place-content-center">
				<div class="flex flex-col">
					
					<dl class="space-y-10 md:space-y-0 grid grid-cols-1 md:gap-x-8 md:gap-y-10">
						
						<div class="relative">

							<dt>
								<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-900 text-white">

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


			<div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center md:justify-items-start">

				<div 
					class="flex flex-col justify-between w-80 md:w-56 lg:w-full h-52 border border-gray-300 px-4 py-4 rounded-lg"
				>
					<div>
						<div class="font-black text-xl">Regulamento</div> 
						<div class="font-light font-xxs text-gray-400">
							<span style="font-size: .8em">de 00/00/0000</span>
						</div> 
					</div>
					<button class="bg-indigo-900 text-white py-2 rounded-md">
						Download
					</button>
				</div>

				<div 
					class="flex flex-col justify-between w-80 md:w-56 lg:w-full h-52 border border-gray-300 px-4 py-4 rounded-lg"
				>
					<div>
						<div class="font-black text-xl">Equipes</div> 
						<div class="font-light font-xxs text-gray-400">
							<span style="font-size: .8em">de 00/00/0000</span>
						</div> 
					</div>
					<button class="bg-indigo-900 text-white py-2 rounded-md">
						Download
					</button>
				</div>

				<div 
					class="flex flex-col justify-between w-80 md:w-56 lg:w-full h-52 border border-gray-300 px-4 py-4 rounded-lg"
				>
					<div>
						<div class="font-black text-xl">Tabela de Classificação</div> 
						<div class="font-light font-xxs text-gray-400">
							<span style="font-size: .8em">de 00/00/0000</span>
						</div> 
					</div>
					<button class="bg-indigo-900 text-white py-2 rounded-md">
						Download
					</button>
				</div>

				<div 
					class="flex flex-col justify-between w-80 md:w-56 lg:w-full h-52 border border-gray-300 px-4 py-4 rounded-lg"
				>
					<div>
						<div class="font-black text-xl">Comunicados</div> 
						<div class="font-light font-xxs text-gray-400">
							<span style="font-size: .8em">de 00/00/0000</span>
						</div> 
					</div>
					<button class="bg-indigo-900 text-white py-2 rounded-md">
						Download
					</button>
				</div>

				<div 
					class="flex flex-col justify-between w-80 md:w-56 lg:w-full h-52 border border-gray-300 px-4 py-4 rounded-lg"
					v-for="(form, k) in temporada.formularios.arquivos" :key="k"
				>
					<div>
						<div class="font-black text-xl">{{form.nome}}</div> 
						<div class="font-light font-xxs text-gray-400">
							<span style="font-size: .8em">de 00/00/0000</span>
						</div> 
					</div>
					<button class="bg-indigo-900 text-white py-2 rounded-md">
						Download
					</button>
				</div>

			</div>

			<div class="mt-16">
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
	import { competicoes_quadra } from '/data/data'
	export default {
		data(){
			return {
				competicoes_quadra
			}
		},
		computed:{
			arrTempo(){
				return this.$route.path.split('/').filter( i => i != '')
			},
			pathTo(){
				const newpath = [...this.arrTempo]
				newpath.pop()
				// newpath.push(this.arrTempo[2])
				return newpath.join('/')
			},
			competicaoByPath(){
				return competicoes_quadra[this.arrTempo[1]]
			},
			competicao(){
				const c = this.competicaoByPath
				return {nome: c['nome']}
			},			
			temporadas(){
				return this.competicaoByPath.temporadas
			},
			temporada(){
				return this.temporadas.filter( i => i.temporada == this.arrTempo[2])[0]
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>