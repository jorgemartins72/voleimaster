<template>
	<div>
		<h1 class="font-inter-800 font-black uppercase text-2xl text-gray-600 mb-4">
			{{federacao.titulo}}
		</h1>
		<div class="md:px-8 mb-8">
			<div class="space-y-4 grid grid-cols-1">
				<p class="text-xl leading-7 font-black text-gray-600">
					"{{federacao.textos.destaque}}"
				</p>
				<p
					v-for="(item, k) in federacao.textos.paragrafos" :key="k"
					class="text-base text-gray-600"
				>
					{{item}}
				</p>
			</div>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6">
			<div class="font-inter-800 font-black uppercase text-xl text-gray-600 mb-4">
				Integrantes
			</div>

			<div class="md:col-span-4 lg:col-span-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:pt-2">

				<div
					v-for="(i, k) in federacao.integrantes" :key="k" 
					class="mx-auto md:mx-0 w-9/12 md:w-full" 
				>
					<div 
						class="w-full h-60 md:h-56 bg-cover rounded-lg mb-1"
						:style="`background-image: url('/quemsomos/fvmr/integrantes/${i.foto}')`"
					/>
					<div class="text-sm">{{i.nome}}</div>
					<div class="font-black text-indigo-900 mb-1">{{i.cargo}}</div>
					<div class="font-light text-sm">{{i.info}}</div>

				</div>


			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['dados'],
		computed: {
			federacao(){
				return this.dados.federacao
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>