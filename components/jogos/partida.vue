<template>
	<div>
		<div class="grid grid-cols-11 justify-center items-center mt-1">
			<div class="col-span-5 -mr-2 text-right text-lg font-robotocondensed-400 font-bold leading-5 text-indigo-900">
				{{dados.equipe1}}
			</div>
			<div class="text-gray-400 text-center text-sm">vs</div>
			<div class="col-span-5 -ml-2 text-left text-lg font-robotocondensed-400 font-bold leading-5 text-indigo-900">
				{{dados.equipe2}}
			</div>
		</div>
		<div class="grid grid-cols-11 justify-center" :class="{'-mt-2': placar}">
			<div class="col-span-5 -mr-2 text-right text-2xl font-robotocondensed-400 font-bold text-indigo-900">
				{{placar1}}
			</div>
			<div class="text-gray-400 pt-1" v-if="placar"> / </div>
			<div class="col-span-5 -ml-2 text-left text-2xl font-robotocondensed-400 font-bold text-indigo-900">
				{{placar2}}
			</div>
		</div>
		<div class="flex justify-center text-xs">
			<div v-for="(v, c) in parciais" :key="c">
				{{v}}<span class="mx-2 font-black" v-if="c < (parciais.length - 1)">-</span>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		props: ['dados'],
		computed: {
			sets(){
				if(this.dados.pontos1){
					const arr1 = this.dados.pontos1
					const arr2 = this.dados.pontos2
					const arr3 = arr1.map( p => 
						{ 
							const k = arr1.indexOf(p)
							return [arr1[k], arr2[k]]
						} 
					)
					return arr3
				}
			},
			placar(){
				if(this.dados.pontos1){
					const arr1 = this.dados.pontos1
					const arr2 = this.dados.pontos2
					const arr3 = arr1.map( p => 
						{ 
							const k = arr1.indexOf(p)
							return arr1[k] > arr2[k] ? [1, 0] : [0, 1]
						} 
					)
					let result = [0, 0]
					arr3.forEach(i => {
						result[0] += i[0] 
						result[1] += i[1] 
					})
					return result
				}
			},
			placar1(){
				return this.placar ? this.placar[0] : ''
			},
			placar2(){
				return this.placar ? this.placar[1] : ''
			},
			parciais(){
				return this.sets ? this.sets.map( s => `${s[0]}/${s[1]}` ) : ''
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>