<template>
	<div class="pb-12">
		<Breadcrumb itemLink="quadra" />
		<h1 class="font-inter-800 font-black uppercase text-2xl text-gray-600 mb-4">Voleibol de Praia</h1>
		<div class="md:px-8 lg:px-16">

			<div class="grid grid-cols-1 gap-4 place-content-center">
				<div class="flex flex-col">
					<h3 class="text-lg font-black text-gray-400 mb-4">
						Competições
					</h3>
					
					<dl class="space-y-10 md:space-y-0 grid grid-cols-1 md:gap-x-8 md:gap-y-10">
						
						<div v-for="(competicao, k) in competicoes_praia" :key="k" class="relative">

							<NuxtLink :to="`/praia/${k}`">
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
										Temporada {{competicao.temporadas[0].temporada}}
									</h3>
								</dt>
								<dd class="ml-16 leading-4 text-base text-gray-500">
									{{competicao.temporadas[0].descricao}}
								</dd>
							</NuxtLink>
						</div>

					</dl>

				</div>

			</div>

			
		</div>
	</div>
</template>

<script>
	import { competicoes_praia } from '/static/data'
	export default {
		data() {
			return {
				competicoes_praia
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>