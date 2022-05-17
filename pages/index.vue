<template>
	<div class="pagina">
		<Carousel :noticias="arrNews" />
	</div>
</template>

<script>
	import { Noticias } from '@/static/noticias/noticias'
	import Carousel from "@/components/carousel/carousel"
	export default {
		components: { Carousel },
		data(){
			return {
				Noticias
			}
		},
		computed: {
			arrNews(){
				let arr = [...this.Noticias]
				arr.shift()
				return arr.slice(0, 3)
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>