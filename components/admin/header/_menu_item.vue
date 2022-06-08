<template>
	<div>

		<div v-if="!item.subitens">
			<!-- Item Menu -->
			<NuxtLink 
				:to='item.link' 
				class="text-base py-2 font-medium uppercase text-gray-500 hover:text-gray-900"
			>
				{{item.item}}
			</NuxtLink>
		</div>

		<!-- Item Menu com Subitens Início -->
		<div class="relative" v-else>

			<button 
				type="button" 
				class="text-gray-500 py-2 group bg-white rounded-md inline-flex items-center text-base font-medium uppercase hover:text-gray-900 focus:outline-none" 
				aria-expanded="false"
				@click="openMenu"
			>
				<span>{{item.item}}</span>
				<svg class="text-gray-400 ml-1 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
				</svg>
			</button>

			<transition name="anime">
				<div 
					class="absolute z-10 -ml-4 mt-0 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:-left-1/4 anime"
					v-if="show"
					@mouseleave="closeMenu"
				>
					<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
						<div class="relative grid gap-6 bg-white px-3 py-3 sm:gap-5 sm:p-5">
							
							<NuxtLink 
								v-for="(subitem, k) in item.subitens" :key="k" 
								:to="`${item.link}${subitem.link}`"
								class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-200"
								@click.native="closeMenu"
							>
								<p class="text-base font-medium text-gray-900">{{subitem.item}}</p>
							</NuxtLink>

						</div>
					</div>
				</div>
			</transition>

		</div>

	</div>
</template>

<script>

	export default {
		transition: { name: 'anime' },
		props: ['item', 'selecionado'],
		data(){
			return {
				exibir: false,
			}
		},
		computed: {
			show(){
				return this.item.link == this.selecionado ? true : false
			},
		},
		methods:{
			openMenu(){
				this.$emit('itemSelecionado', this.item.link)
			},
			closeMenu(){
				this.$emit('itemSelecionado', null)
			},
		},
		watch:{
			selecionado(){
				this.exibir = this.selecionado ? true : false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.anime-enter-active {
		animation: fadeInUp 150ms;
	}
	.anime-leave-active {
		animation: fadeOutDown 150ms;
	}
</style>