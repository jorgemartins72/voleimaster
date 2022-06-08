<template>
	<div class="w-full">
		<div style="background-color: #003;">
			<div class="relative">
				<div class="w-full h-8 absolute sign" />
				<div class="w-full h-8 flex justify-center text-gray-500 text-xxs py-2 px-8 absolute md:justify-end">
					Desenvolvido por <a href="https://www.jorgemartins.com.br" class="ml-1 uppercase hover:text-gray-200 font-black" target="_blank">Jorge Martins</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		data() {
			return {
			}
		},
	}
</script>

<style lang="scss" scoped>
	.sign {
		background-color: #01011a;
	}
</style>