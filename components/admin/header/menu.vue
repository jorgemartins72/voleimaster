<template>
	<div class="w-full bg-white z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6">
			<div class="flex justify-between items-center border-b-2 border-gray-100 py-2 md:space-x-10">
				<!-- Logo -->
				<div class="flex justify-start lg:w-0 lg:flex-1">
					<NuxtLink :to="'/admin'">
						<span class="sr-only">Logo</span>
						<Logo class="logo" />
					</NuxtLink>
				</div>

				<nav class="hidden md:flex space-x-6 items-center">

					<NuxtLink 
						:to="'#'" 
						class="text-base py-2 font-medium uppercase text-gray-500 hover:text-gray-900"
					>
						aaa
					</NuxtLink>

				</nav>

			</div>
		</div>


	</div>
</template>

<script>
	import Logo from '@/components/logo.vue'

	export default {
		components: { Logo },
		data() {
			return {
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>