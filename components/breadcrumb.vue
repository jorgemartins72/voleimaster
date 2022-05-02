<template>
	<div>
		<nav aria-label="Breadcrumb">
			<ol role="list" class="max-w-2xl mx-auto py-3 font-bold flex items-center space-x-2 lg:max-w-7xl">
				<li>
					<div class="text-sm font-bold text-gray-300">
						{{itemPageBase.item}}
					</div>
				</li>

				<li class="text-sm">
					<div class="flex items-center">
						<svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
							<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
						</svg>
						<div class="ml-2 text-sm font-bold text-gray-300" v-if="itemPage">
							{{itemPage.item}}
						</div>
					</div>
				</li>
			</ol>
		</nav>
	</div>
</template>

<script>
	import MenuData from '~/assets/menu.json'
	export default {
		props: ['itemLink'],
		data(){
			return {
				MenuData
			}
		},
		computed:{
			itemPageBase(){
				return this.MenuData.filter(i => i.link == `/${this.itemLink}`)[0]
			},
			itemPage(){
				return this.itemPageBase.subitens ? this.itemPageBase.subitens.filter(i => i.link == `/${this.$route.params.slug}`)[0] : ''
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>