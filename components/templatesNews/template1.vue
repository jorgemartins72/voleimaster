<template>
	<div>
		<h1 class="font-black text-4xl text-gray-600 mb-3">
			{{noticia.titulo}}
		</h1>
		<div class="flex items-center font-light text-xs text-gray-600 mb-3">
			<svg class="h-4 w-4 mr-1 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<div>
				{{noticia.datebr}}
			</div>
		</div>
		<div class="font-light text-lg text-gray-800 mb-4">
			<div class="flex flex-col justify-center">
				<img class="inline mt-2 mb-4 h" :src="pathFoto" alt="" />
			</div>
			<p v-for="(paragrafo, k) in noticia.texto.paragrafos" :key="k" v-html="paragrafo" />
		</div>
	</div>
</template>

<script>
	export default {
		props: [ 'noticia' ],
		computed:{
			pathFoto(){
				return `/noticias/${this.noticia.date}/${this.noticia.fotos[0]}`
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>