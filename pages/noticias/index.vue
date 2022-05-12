<template>
	<div class="">
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
		computed: {
			destaque(){
				let arr = [...this.Noticias]
				return arr[0]
			},
			arrNews(){
				let arr = [...this.Noticias]
				arr.shift()
				return arr.slice(0, 4)
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>