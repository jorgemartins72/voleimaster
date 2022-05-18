<template>
	<div class="">
		<Breadcrumb itemLink="noticias" />
		<h1 class="font-inter-800 font-black uppercase text-2xl text-gray-600 mb-4">Notícias</h1>

		<div class="w-full flex justify-center flex-wrap gap-y-5 md:gap-5 mb-16">

			<a 
				:href="`/noticias/${item.idpath}`" 
				v-for="(item, k) in Noticias" :key="k"
				class="w-full md:w-auto"
			>
				<div class="w-full h-80 md:w-72 md:h-80 rounded-md border border-gray-200 bg-gray-50 shadow-md overflow-hidden flex flex-col">
					<div 
						class="w-full h-44 bg-cover bg-center"
						:style="`background-image: url('/noticias/${item.date}/${item.fotos[0]}')`" 
					/>

					<div class="flex items-center justify-end font-light text-xs text-gray-600 pt-1 pb-2 px-3">

						<svg class="h-4 w-4 mr-1 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<div>
							{{item.datebr}}
						</div>
					</div>

					<div class="px-4 font-black text-lg leading-5 text-gray-600">{{item.titulo}}</div>
				</div>
			</a>
			
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
				return arr.slice(0, 6)
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>