<template>
	<div class="pb-12">
		<Breadcrumb itemLink="praia" />
		<h1 class="font-inter-800 uppercase font-black text-2xl text-gray-600 mb-4">Voleibol de Praia</h1>
		<div class="md:px-8 lg:px-16">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
				<div class="flex flex-col">
					<h3 class="text-lg font-black text-gray-400 mb-4">Competições da Temporada {{competicoes_praia.estadual.temporadas[0].temporada}}</h3>
					
					<dl class="space-y-10 md:space-y-0 grid grid-cols-1 md:gap-x-8 md:gap-y-10">
						
						<div v-for="(competicao, k) in competicoes_praia" :key="k" class="relative">
							<dt>
								<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-900 text-white">

									<svg class="h-8 w-8" fill="#fff" viewBox="0 0 297 297">
										<path d="M148.5,128.178h-8.878c-4.136,0-7.488,3.352-7.488,7.488s3.352,7.488,7.488,7.488h1.39v23.351 c0,4.136,3.352,7.488,7.488,7.488s7.488-3.352,7.488-7.488v-30.839C155.988,131.53,152.636,128.178,148.5,128.178z"/>
										<path d="M284.78,174.822h-66.674V99.63c0-5.514-4.47-9.984-9.984-9.984H88.877c-5.514,0-9.984,4.47-9.984,9.984v41.121H12.22 c-5.514,0-9.984,4.47-9.984,9.984v136.28c0,5.514,4.47,9.984,9.984,9.984H284.78c5.514,0,9.984-4.47,9.984-9.984v-102.21 C294.764,179.292,290.294,174.822,284.78,174.822z M274.797,277.032H22.203V160.72h66.674c5.514,0,9.984-4.47,9.984-9.984v-41.121 h99.278v75.191c0,5.514,4.47,9.984,9.984,9.984h66.674V277.032z"/>
										<path d="M229.37,252c-4.136,0-7.488,3.352-7.488,7.488c0,4.136,3.352,7.488,7.488,7.488h19.968c4.136,0,7.488-3.352,7.488-7.488 v-42.974c0-4.136-3.352-7.488-7.488-7.488H229.37c-4.136,0-7.488,3.352-7.488,7.488c0,4.136,3.352,7.488,7.488,7.488h12.48v6.728 h-12.48c-4.136,0-7.488,3.352-7.488,7.488c0,4.136,3.352,7.488,7.488,7.488h12.48V252H229.37z"/>
										<path d="M69.627,209.027H49.659c-4.136,0-7.488,3.352-7.488,7.488c0,4.136,3.352,7.488,7.488,7.488h12.48v6.728h-12.48 c-4.136,0-7.488,3.352-7.488,7.488v21.269c0,4.136,3.352,7.488,7.488,7.488h19.968c4.136,0,7.488-3.352,7.488-7.488 c0-4.136-3.352-7.488-7.488-7.488h-12.48v-6.294h12.48c4.136,0,7.488-3.352,7.488-7.488v-21.704 C77.115,212.379,73.763,209.027,69.627,209.027z"/>
										<path d="M114.838,56.631l-1.414,19.259c-0.253,3.446,1.294,6.777,4.089,8.807c2.796,2.031,6.443,2.474,9.641,1.167l17.878-7.295 l17.879,7.295c1.217,0.496,2.497,0.74,3.771,0.74c2.077,0,4.137-0.648,5.869-1.907c2.795-2.03,4.342-5.361,4.089-8.807 l-1.414-19.259l12.464-14.751c2.23-2.639,2.937-6.243,1.869-9.529c-1.068-3.286-3.759-5.787-7.114-6.61l-18.753-4.607 L153.518,4.723C151.697,1.786,148.487,0,145.033,0c-3.455,0-6.664,1.786-8.485,4.723l-10.176,16.412l-18.753,4.607 c-3.355,0.824-6.046,3.325-7.114,6.61c-1.068,3.286-0.361,6.889,1.869,9.529L114.838,56.631z M135.092,39.553 c2.536-0.623,4.727-2.214,6.103-4.434l3.838-6.19l3.839,6.19c1.377,2.22,3.567,3.811,6.103,4.434l7.074,1.738l-4.701,5.563 c-1.685,1.995-2.522,4.57-2.331,7.174l0.533,7.265l-6.744-2.751c-1.209-0.493-2.491-0.74-3.772-0.74s-2.563,0.247-3.772,0.74 l-6.743,2.751l0.533-7.265c0.191-2.604-0.646-5.179-2.331-7.174l-4.701-5.563L135.092,39.553z" />
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
					<h3 class="text-lg sm:mt-8 md:mt-0 font-black text-gray-400 mb-4">
						{{ComissaoDePraia.titulo}}
					</h3>
					
					<dl class="space-y-6 md:space-y-0 grid grid-cols-1 md:gap-x-8 md:gap-y-4">
						
						<div class="relative">
							<a href="/praia/comissao">
								<dt>
									<div class="absolute flex items-center justify-center h-6 w-6 rounded-md text-indigo-300">
										<svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
											<path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
										</svg>
									</div>
									<p class="ml-8 text-2xl leading-6 font-black text-gray-900">
										{{ComissaoDePraia.palavra.titulo}}
									</p>
								</dt>
								<dd class="mt-1 hidden md:block ml-8 text-base text-gray-500">
									{{ComissaoDePraia.palavra.texto.substr(0, 99)}}... <span class="font-medium text-indigo-700">Leia mais</span>
								</dd>
							</a>
						</div>
						
						<div class="relative">
							<a href="/praia/comissao">
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
							<a href="/praia/comissao">
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
	import { competicoes_praia, ComissaoDePraia } from '/data/data'
	export default {
		data() {
			return {
				competicoes_praia,
				ComissaoDePraia
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>