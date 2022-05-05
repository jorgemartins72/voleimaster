<template>
	<div>
		<div class="flex flex-col pb-16 ">
			<h3 class="text-lg sm:mt-8 md:mt-0 font-black text-gray-400 mb-4">
				{{comissao.titulo}}
			</h3>

			<dl class="space-y-6 md:space-y-0 grid grid-cols-1 md:gap-x-8 md:gap-y-8">
				
				<div class="relative">
					<dt>
						<div class="absolute flex items-center justify-center h-6 w-6 rounded-md text-indigo-300">
							<svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
							</svg>
						</div>
						<p class="ml-8 mb-3 text-2xl leading-6 font-black text-gray-900">
							{{comissao.palavra.titulo}}
						</p>
					</dt>
					<dd class="mt-1 ml-8 text-lg text-gray-600">
						{{comissao.palavra.texto}}
					</dd>
				</div>
				
				<div class="relative">
					<dt>
						<div class="absolute flex items-center justify-center h-6 w-6 rounded-md text-indigo-300">
							<svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
							</svg>
						</div>
						<p class="ml-8 mb-3 text-2xl leading-6 font-black text-gray-900">
							Integrantes
						</p>
					</dt>
					<dd class="mt-1 ml-8 text-lg text-gray-600">

						<div class="flex flex-wrap gap-2 md:gap-6 justify-center">
							<div 
								v-for="(integrante, k) in comissao.integrantes" :key="k"
								class="w-50 md:w-48 mb-6 md:mb-2 flex flex-col items-start justify-items-center"
							>
								<img class="rounded-full" :src="require(`~/assets/imgs/comissao_praia/${integrante.img}`)" />
								<div class="w-full mt-1 text-center text-sm font-black text-gray-700">{{integrante.nome}}</div>
								<div class="w-full mt-1 text-center text-sm font-black text-indigo-800">{{integrante.cargo}}</div>
							</div>
						</div>

					</dd>
				</div>
				
				<div class="relative">
					<dt>
						<div class="absolute flex items-center justify-center h-6 w-6 rounded-md text-indigo-300">
							<svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
							</svg>
						</div>
						<p class="ml-8 mb-3 text-2xl leading-6 font-black text-gray-900">
							Regulamento
						</p>
					</dt>
					<dd class="mt-1 ml-8">
						<div class="text-lg text-gray-600">
							{{comissao.regulamento.texto}}
						</div>
						<button 
							class="flex flex-nowrap items-center gap-1 mt-3 px-6 py-2 text-xl rounded-md border border-gray-300 bg-gray-100 text-gray-600"
						>
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
							<div>
								{{comissao.regulamento.arquivos[0].nome}}
							</div>
						</button>
					</dd>
				</div>
				
			</dl>

		</div>
	</div>
</template>

<script>
	export default {
		props: ['comissao']
	}
</script>

<style lang="scss" scoped>

</style>