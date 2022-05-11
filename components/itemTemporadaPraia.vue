<template>
	<div 
		class="flex flex-col justify-between w-80 md:w-56 lg:w-full h-52 border border-gray-300 px-4 py-4 rounded-lg"
		v-if="item"
	>
		<div class="flex flex-col items-start">
			<div class="font-black text-xl">
				<p>{{item.nome}}</p>
			</div> 
			<div class="w-80 font-light font-xxs text-gray-400">
				<span style="font-size: .8em">de {{item.arquivos[0].data}}</span>
			</div> 
		</div>

		<a :href="pathDownload" target="_blank" download="" class="bg-yellow-700 text-white py-2 text-center rounded-md">
			Download
		</a>

	</div>
</template>

<script>
	export default {
		props: ['item', 'info', 'temporada', 'modalidade', 'etapa'],
		computed:{
			pathDownload(){
				let t = this.info[2] ? this.info[2] : this.temporada
				return `/${this.info[0]}/competicoes/${this.info[1]}/${t}/${this.modalidade}/etapa${this.etapa}/${this.item.arquivos[0].arquivo}`
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>