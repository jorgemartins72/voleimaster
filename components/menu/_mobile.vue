<template>
	<div>

		<!--
			Mobile menu, show/hide based on mobile menu state.

			Entering: "duration-200 ease-out"
			From: "opacity-0 scale-95"
			To: "opacity-100 scale-100"
			Leaving: "duration-100 ease-in"
			From: "opacity-100 scale-100"
			To: "opacity-0 scale-95"
		-->
		<transition name="animemobile">
			<div
				v-if="exibir"
				class="absolute top-0 inset-x-0 px-2 transition transform origin-top-right md:hidden"
			>
				<div 
					class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
					@mouseleave="closeMenu"
				>
					<div class="pt-2 pb-6 px-5">
						<div class="flex items-center justify-between">
							<div id="logo-mobile">
								<NuxtLink 
									:to="{name: 'index'}" 
									@click.native="closeMenu"
								>
									<Logo class="-ml-2" />
								</NuxtLink>
							</div>
							<div class="-mr-2">
								<button 
									type="button" 
									@click="closeMenu"
									class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-inset focus:ring-indigo-500"
								>
									<span class="sr-only">Close menu</span>
									<svg class="h-9 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
						</div>
						<div class="mt-6">
							<nav class="grid gap-y-8">

								<NuxtLink 
									:to="v.link"
									@click.native="closeMenu"
									v-for="(v, k) in itens" :key="k"
									class="-m-3 p-3 flex items-center rounded-md bg-gray-100 hover:bg-gray-200"
								>
									<span class="text-xl font-medium text-gray-900">
										{{v.item}}
									</span>
								</NuxtLink>

							</nav>
						</div>
					</div>

				</div>
			</div>
		</transition>

	</div>
</template>

<script>
	import Logo from '/components/logo'
	export default {
		transition: { name: 'animemobile' },
		components: { Logo },
		props: ['itens', 'exibir'],
		methods: {
			closeMenu(){
				this.$emit('fecharMenuMobile', false)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.animemobile-enter-active {
		animation: fadeInLeft 150ms;
	}
	.animemobile-leave-active {
		animation: fadeOutLeft 150ms;
	}
</style>