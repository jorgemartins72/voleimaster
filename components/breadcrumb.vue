<template>
	<div>
		<nav aria-label="Breadcrumb">
			<ol role="list" class="max-w-2xl mx-auto py-3 font-bold flex items-center space-x-2 lg:max-w-7xl">
				<li>
					<div class="text-sm font-bold text-gray-300">
						{{itemPageBase.item}}
					</div>
				</li>

				<li class="text-sm" v-if="itemPage">
					<div class="flex items-center">
						<svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
							<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
						</svg>
						<div class="ml-2 text-sm font-bold text-gray-300">
							{{itemPage.item}}
						</div>
					</div>
				</li>

				<li class="text-sm" v-if="!itemPage">
					<div class="flex items-center">
						<svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
							<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
						</svg>
						<div class="ml-2 text-sm font-bold text-gray-300" v-if="subItemExtra">
							{{subItemExtra.nome}}
						</div>
					</div>
				</li>

			</ol>
		</nav>
	</div>
</template>

<script>
	import MenuData from '~/assets/menu.json'
	import { competicoes_quadra, competicoes_praia } from '/static/data' 
	export default {
		data(){
			return {
				MenuData,
				competicoes_quadra,
				competicoes_praia
			}
		},
		computed:{
			arrPath(){
				return this.$route.path.split('/').filter(i=> i != '')
			},
			itemPageBase(){
				return this.MenuData.filter(i => i.link == `/${this.arrPath[0]}`)[0]
			},
			itemPage(){
				return this.itemPageBase.subitens !== undefined ? this.itemPageBase.subitens.filter(i => i.link == `/${this.arrPath[1]}`)[0] : ''
			},
			subItemExtra(){
				const itemquadra = this.competicoes_quadra[this.arrPath[1]]
				const itempraia = this.competicoes_praia[this.arrPath[1]]
				if(this.arrPath[0] == 'quadra'){
					return itemquadra
				} else {
					return itempraia
				}
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>