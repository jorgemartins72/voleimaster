<template>
	<div>

		<Breadcrumb itemLink="noticias" />

		<div class="grid grid-cols-4 gap-6 mb-4">
			
			<div class="col-span-3">

				<templateNews :noticia="destaque" />

			</div>

			<div>
				<div class="font-light text-sm uppercase mb-4">
					Veja também
				</div>
				<div class="flex flex-col text-lg gap-3">

					<a :href="`/noticias/${noticia.idpath}`" v-for="(noticia, k) in arrNews" :key="k">
						<h2 class="font-semibold text-gray-600">
							{{noticia.titulo}}
						</h2>
						<h3 class="font-light text-xs text-gray-600">{{noticia.datebr}}</h3>
					</a>

				</div>
			</div>

		</div>
		
	</div>
</template>

<script>
	import { Noticias } from '/static/noticias/noticias'
	import templateNews from '/components/templatesNews/templates'

	export default {
		components:{ templateNews },
		data() {
			return {
				Noticias,
			}
		},
		async asyncData({ params }) {
			const slug = params.slug
			return { slug }
		},
		computed: {
			destaque(){
				return this.Noticias.filter( i => i.idpath == this.slug)[0]
			},
			arrNews(){
				return Noticias.filter( i => i.idpath != this.slug).slice(0, 4)
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>