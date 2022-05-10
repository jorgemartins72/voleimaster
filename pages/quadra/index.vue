<template>
	<div class="pb-12">
		<Breadcrumb itemLink="quadra" />
		<h1 class="font-inter-800 font-black uppercase text-2xl text-gray-600 mb-4">Voleibol de Quadra</h1>
		<div class="md:px-8 lg:px-16">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
				<div class="flex flex-col">
					<h3 class="text-lg font-black text-gray-400 mb-4">
						Competições
					</h3>
					
					<dl class="space-y-10 md:space-y-0 grid grid-cols-1 md:gap-x-8 md:gap-y-10">
						
						<div v-for="(competicao, k) in competicoes_quadra" :key="k" class="relative">
							<NuxtLink :to="`/quadra/${k}`">
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
										Temporada {{competicao.temporadas[0].temporada}}
									</h3>
								</dt>
								<dd class="ml-16 leading-5 text-base text-gray-500">
									{{competicao.temporadas[0].descricao}}
								</dd>
							</NuxtLink>
						</div>

					</dl>

				</div>
				<div class="flex flex-col">
					<h3 class="text-lg sm:mt-8 md:mt-0 font-black text-gray-400 mb-4">
						{{ComissaoDeQuadra.titulo}}
					</h3>
					
					<dl class="space-y-6 md:space-y-0 grid grid-cols-1 md:gap-x-8 md:gap-y-4">
						
						<div class="relative">
							<a href="/quadra/comissao">
								<dt>
									<div class="absolute flex items-center justify-center h-6 w-6 rounded-md text-indigo-300">
										<svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
											<path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
										</svg>
									</div>
									<p class="ml-8 text-2xl leading-6 font-black text-gray-900">
										{{ComissaoDeQuadra.palavra.titulo}}
									</p>
								</dt>
								<dd class="mt-1 hidden md:block ml-8 text-base text-gray-500">
									{{ComissaoDeQuadra.palavra.texto.substr(0, 99)}}... <span class="font-medium text-indigo-700">Leia mais</span>
								</dd>
							</a>
						</div>
						
						<div class="relative">
							<a href="/quadra/comissao">
								<dt>
									<div class="absolute flex items-center justify-center h-6 w-6 rounded-md text-indigo-300">
										<svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
											<path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
										</svg>
									</div>
									<p class="ml-8 text-2xl leading-6 font-black text-gray-900">
										Integrantes
									</p>
								</dt>
							</a>
						</div>
						
						<div class="relative">
							<a href="/quadra/comissao">
								<dt>
									<div class="absolute flex items-center justify-center h-6 w-6 rounded-md text-indigo-300">
										<svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
											<path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
										</svg>
									</div>
									<p class="ml-8 text-2xl leading-6 font-black text-gray-900">
										Regulamento
									</p>
								</dt>
							</a>
						</div>

					</dl>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { competicoes_quadra, ComissaoDeQuadra } from '/static/data'
	export default {
		data() {
			return {
				competicoes_quadra,
				ComissaoDeQuadra
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>