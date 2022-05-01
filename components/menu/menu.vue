<template>
	<div class="w-full bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6">
			<div class="flex justify-between items-center border-b-2 border-gray-100 py-2 md:space-x-10">
				<!-- Logo -->
				<div class="flex justify-start lg:w-0 lg:flex-1">
					<NuxtLink :to="{ name: 'index' }">
						<span class="sr-only">Logo</span>
						<Logo class="logo" />
					</NuxtLink>
				</div>

				<!-- Botão Menu Mobile -->
				<div class="-mr-2 -my-2 md:hidden">
					<button 
						type="button" 
						class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-inset focus:ring-indigo-500" 
						aria-expanded="false"
						@click="menuMobile"
					>
						<span class="sr-only">Botão Menu Mobile</span>
						<!-- Heroicon name: outline/menu -->
						<svg class="h-9 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>

				<!-- Menu Principal -->
				<nav class="hidden md:flex space-x-6 items-center">

					<MenuItem 
						v-for="(v, k) in MenuData" :key="k" :item="v" 
						:selecionado="selecionado"
						@itemSelecionado="selecionado = $event"
					/>

				</nav>

			</div>
		</div>

		<MenuMobile 
			:itens="MenuData" 
			:exibir="stateMenuMobile"
			@fecharMenuMobile="stateMenuMobile = false"
		/>

	</div>
</template>

<script>
	import Logo from '/components/logo.vue'
	import MenuItem from './_menu_item.vue'
	import MenuMobile from './_mobile.vue'
	import MenuData from '/assets/menu.json'

	export default {
		components: { Logo, MenuItem, MenuMobile },
		data() {
			return {
				MenuData,
				selecionado: null,
				stateMenuMobile: false
			}
		},
		methods:{
			menuMobile(){
				this.stateMenuMobile = true
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>