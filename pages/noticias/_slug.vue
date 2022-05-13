<template>
	<div>

		<Breadcrumb itemLink="noticias" />

		<div class="grid grid-cols-4 gap-6 mb-4">
			
			<div class="col-span-3">

				<templateNews :noticia="destaque" />

			</div>

			<div class="mb-6">
				<div class="font-light text-sm uppercase mb-4">
					Veja também
				</div>
				<div class="flex flex-col text-lg gap-6">

					<a :href="`/noticias/${noticia.idpath}`" v-for="(noticia, k) in arrNews" :key="k">
						<h2 class="font-semibold text-gray-600 leading-5">
							{{noticia.titulo}}
						</h2>
						<div class="flex items-center font-light text-xs text-gray-600 mt-1">

							<svg class="h-4 w-4 mr-1 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<div>
								{{noticia.datebr}}
							</div>
						</div>
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
				return Noticias.filter( i => i.idpath != this.slug).slice(0, 6)
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>