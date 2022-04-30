<template>
	<div class="w-full">
		<div class="bg-gray-100 py-3">
			<div class="max-w-7xl mx-auto px-4 pb-3 sm:px-6">
				<div class="flex justify-center pb-3 font-black text-2xl text-gray-500">
					Parceiros
				</div>
				<div class="grid grid-cols-1 gap-1 sm:grid-cols-3">
					<div class="h-28 bg-white flex">
						<a 
							class="w-full flex justify-center items-center" 
							href="https://www.cbem.org.br/" 
							target="_blank"
						>
							<img src="~/assets/imgs/cbem.jpg" />
						</a>
					</div>
					<div class="h-28 bg-white flex">
						<a 
							class="flex justify-center items-center" 
							href="https://www.specialolympics.org.br" 
							target="_blank"
						>
							<img src="~/assets/imgs/especiais.jpg" width="70%" />
						</a>
					</div>
					<div class="h-28 bg-white flex">
						<a 
							class="w-full flex justify-center items-center" 
							href="https://www.sesc.com.br/" 
							target="_blank"
						>
							<img src="~/assets/imgs/sesc.jpg" />
						</a>
					</div>
				</div>
				<div class="flex justify-center py-3 font-black text-2xl text-gray-500">
					Fornecedores
				</div>
				<div class="grid grid-cols-1 gap-1 sm:grid-cols-2 md:px-40 sm:px-0">
					<div class="h-28 bg-white flex">
						<a 
							class="flex justify-center items-center" 
							href="https://www.inteligenciamm.com.br/" 
							target="_blank"
						>
							<img src="~/assets/imgs/inteligenciamm.jpg" width="20%" />
						</a>

					</div>
					<div class="h-28 bg-white flex">
						<a 
							class="flex justify-center items-center" 
							href="https://www.inteligenciamm.com.br/" 
							target="_blank"
						>
							<img src="~/assets/imgs/mmcert.jpg" width="20%" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div style="background-color: #003;">
			<div class="max-w-7xl mx-auto px-4 py-6 sm:px-6">
				<div class="grid text-gray-100">
					<div class="flex flex-wrap md:flex-nowrap">
						<div class="w-full md:w-3/5 flex flex-col items-center md:items-start">
							<NuxtLink :to="'/'"><logorodape /></NuxtLink>
							<h3 class="uppercase font-black text-sm py-3 flex flex-nowrap select-none">
								Federação de Voleibol Master do Rio de Janeiro
							</h3>
						</div>
						<div class="hidden w-1/4 md:block">
							<h2 class="pb-2 uppercase font-black text-sm text-gray-600">NAVEGAÇÃO</h2>
							<ul>
								<li 
									v-for="(item, k) in MenuData" :key="k"
									class="py-2 uppercase font-black text-sm text-gray-400 hover:text-gray-50"
								>
									<NuxtLink 
										:to="item.link"
										@click.native="scrollToTop"
									>
										{{item.item}}
									</NuxtLink>
								</li>
							</ul>
						</div>
						<div class="w-full md:w-1/4 flex flex-col items-center md:items-start">
							<h2 class="hidden pb-2 uppercase font-black text-sm text-gray-600 md:block">REDES SOCIAIS</h2>
							<div class="flex space-x-3">
								<a href="https://www.facebook.com/voleimasterrj/" target="_blank">
									<svg width="32" height="37" viewBox="0 0 448 512" class="opacity-80 hover:opacity-100" fill="currentColor">
										<path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/>
									</svg>
								</a>
								<a href="https://www.instagram.com/fvmrvoleimasterrj/" target="_blank">
									<svg width="32" height="37" viewBox="0 0 448 512" class="opacity-80 hover:opacity-100" fill="currentColor">
										<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
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
	import logorodape from './logorodape.vue'
	import MenuData from '/assets/menu.json'

	export default {
		components: { logorodape },
		data() {
			return {
				MenuData
			}
		},
		methods:{
			scrollToTop() {
				window.scrollTo(0,0);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sign {
		background-color: #01011a;
	}
</style>