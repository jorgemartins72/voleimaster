<template>
	<div class="pb-12">
		<Breadcrumb itemLink="quadra" />
		<h1 class="font-inter-800 font-black text-2xl text-gray-600 mb-4">Voleibol de Quadra</h1>
		<div class="md:px-8 lg:px-16">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
				<div class="flex flex-col">
					<h3 class="text-lg font-black text-gray-400 mb-4">Competições</h3>
					
					<dl class="space-y-10 md:space-y-0 grid grid-cols-1 md:gap-x-8 md:gap-y-10">
						
						<div v-for="(competicao, k) in competicoes_quadra" :key="k" class="relative">
							<dt>
								<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-900 text-white">
									<svg class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
									</svg>
								</div>
								<p class="ml-16 text-2xl leading-6 font-black text-gray-900">{{competicao.nome}}</p>
							</dt>
							<dd class="mt-1 ml-16 text-base text-gray-500">
								{{competicao.descricao}}
							</dd>
						</div>

					</dl>

				</div>
				<div class="flex flex-col">
					<h3 class="text-lg font-black text-gray-400 mb-4">Comissão de Quadra</h3>
					
					<dl class="space-y-10 md:space-y-0 grid grid-cols-1 md:gap-x-8 md:gap-y-10">
						
						<div v-for="(competicao, k) in competicoes_quadra" :key="k" class="relative">
							<dt>
								<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-900 text-white">
									<svg class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
									</svg>
								</div>
								<p class="ml-16 text-2xl leading-6 font-black text-gray-900">{{competicao.nome}}</p>
							</dt>
							<dd class="mt-1 ml-16 text-base text-gray-500">
								{{competicao.descricao}}
							</dd>
						</div>

					</dl>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { competicoes_quadra } from '/data/data'
	export default {
		data() {
			return {
				competicoes_quadra,
			}
		},
	}
</script>

<style lang="scss" scoped>
h1 {
	text-transform: uppercase;
}
</style>