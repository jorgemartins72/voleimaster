<template>
	<div>
		<h1 class="font-inter-800 font-black uppercase text-2xl text-gray-600 mb-4">
			{{gestao.titulo}}
		</h1>
		<div class="md:px-8 mb-16">
			<div class="space-y-4 grid grid-cols-1">
				<p class="text-xl leading-7 font-black text-gray-600">
					{{gestao.texto}}
				</p>
			</div>
		</div>

		<div class="md:px-8 mb-8">

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				
				<div
					v-for="(item, k) in  gestao.objetivos" :key="k"
					class="w-full border border-gray-300 bg-white rounded-lg shadow-xl p-8 select-none"
				>
					<div class="bg-indigo-900 text-white w-full rounded-3xl text-center py-3 font-inter-800 font-black uppercase text-lg -mt-14">
						{{item.titulo}}
					</div>
					<p class="mt-8 text-xl text-gray-700 text-center">{{item.texto}}</p>
				</div>

			</div>

		</div>
		
	</div>
</template>

<script>
	export default {
		props: ['dados'],
		computed: {
			gestao(){
				return this.dados.gestao
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>