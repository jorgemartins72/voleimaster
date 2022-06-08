<template>
	<div class="bg-white h-screen flex flex-col">
		<div class="h-auto">
			<MenuAdmin />
		</div>
		<div class="lg:h-full">
			<!-- <Nuxt /> -->
			
			<div class="max-w-7xl mx-auto px-4 sm:px-6 h-full bg-red-300">
				<p class="text-xl" v-for="i in 2" :key="i">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, illum est adipisci voluptate, dicta repellendus aut voluptatem dolores eum eius molestias laudantium ad itaque quibusdam voluptates fuga error, corrupti corporis?</p>
			</div>

		</div>
		<div class="lg:h-fit sign">
			<RodapeAdmin class="" />
		</div>
	</div>
</template>

<script>

	import MenuAdmin from '@/components/admin/header/menu'
	import RodapeAdmin from '@/components/admin/rodape/rodape'

	export default {
		components: {
			MenuAdmin,
			RodapeAdmin
		}

	}
</script>

<style lang="scss" scoped>
	.sign {
		// background-color: #01011a;
		background-color: #030381;
	}
</style>