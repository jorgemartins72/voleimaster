<template>
	<div>
		<h1 class="font-black text-4xl text-gray-600 mb-3">
			{{noticia.titulo}}
		</h1>
		<h3 class="font-light text-xs text-gray-600 mb-3">{{noticia.datebr}}</h3>
		<div class="font-light text-lg text-gray-800 mb-4">
			<div class="flex flex-col justify-center">
				<img class="mt-2 mb-4" :src="pathFoto" alt="" />
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