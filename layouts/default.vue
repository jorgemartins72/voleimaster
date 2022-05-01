<template>
	<div class="relative bg-white">
		<Menu class="fixed" />
		<div class="flex flex-col h-screen">
			<main class="flex-grow">
				<Nuxt />
			</main>
			<footer>
				<Rodape />
			</footer>
		</div>

	</div>
</template>

<script>

	export default {

		middleware(){
			if(process.browser){
				window.scrollTo(0,0)
			}
		}

	}
</script>

<style lang="scss" scoped>

</style>