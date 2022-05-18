<template>
	<div>
		<div 
			class="h-96 md:h-480 lg:h-540 w-full bg-white bg-no-repeat bg-left-bottom relative overflow-hidden"
		>
			<transition name="foto" mode="out-in">
				<div 
					class="absolute h-96 w-screen md:h-480 lg:h-full md:w-full"
					:style="`background-image: url('/noticias/${item.date}/${item.fotos[0]}')`"
					v-if="show(k)"
					v-for="(item, k) in noticias" :key="k"
				/>
			</transition>

			<div class="absolute w-full h-full bg-gradient-to-r from-black opacity-75" />

			<div class="absolute w-full">
				<div class="px-12 pt-20 md:px-24 md:pt-20 lg:px-48 lg:pt-24">
					<h1 
						class="w-9/12 md:w-7/12 lg:w-5/12 text-white text-3xl md:text-4xl lg:text-5xl font-black sombra textoEntrando select-none"
						v-show="show(k)"
						v-for="(item, k) in noticias" :key="k"
					>
						{{item.titulo}}
					</h1>
				</div>
			</div>

			<a :href="`/noticias/${item.idpath}`" title="" v-show="show(k)" v-for="(item, k) in noticias" :key="k"  class="absolute w-full h-full bg-black opacity-0" />
		</div>
	</div>
</template>

<script>
	export default {
		props: ['noticias'],
		data(){
			return {
				visivel: false,
				indice: 0
			}
		},
		computed: {
			totalNoticias(){
				return this.noticias.length
			}
		},
		mounted(){
			this.mudando()
			this.mudaIndice()
		},
		methods: {
			mudando(){
				setInterval(() => {
					this.visivel = !this.visivel
				}, 7000);
			},
			mudaIndice(){
				setInterval(() => {
					if(this.indice >= 2){
						this.indice = 0
					} else {
						this.indice += 1
					}
				}, 7000);
			},
			show(key){
				return key == this.indice ? true : false
			},
			pathFoto(){
				return `/noticias/${this.noticia.date}/${this.noticia.fotos[0]}`
				// /noticias/{{item.date}}/{{item.fotos[0]}}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.foto-enter {
		opacity: 0;
	}
	.foto-enter-active {
		animation: leftRight 9s ease 1 forwards;
	}
	.foto-leave-active {
		animation: fade 200ms ease 1 forwards;
	}

	.sombra {
		filter: drop-shadow(5px 5px 2px rgba(0,0,0, .75));
	}

	.textoEntrando {
		animation: rightLeft 2s ease 1 forwards;
	}

	@keyframes leftRight {
		0% {
			-webkit-transform: scale(1) translate(0, 0);
					transform: scale(1) translate(0, 0);
					opacity: 0;
			-webkit-transform-origin: 16% 50%;
					transform-origin: 16% 50%;
		}
		20% {
			opacity: 1;
		}
		60% {
			-webkit-transform: scale(1.25) translate(-20px, 15px);
					transform: scale(1.25) translate(-20px, 15px);
			-webkit-transform-origin: left;
					transform-origin: left;
		}
		100% {
			-webkit-transform: scale(1.25) translate(-20px, 15px);
					transform: scale(1.25) translate(-20px, 15px);
			-webkit-transform-origin: left;
					transform-origin: left;
		}
	}

	@keyframes rightLeft {
		0% {
			transform: translate(100px, 0);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			transform: translate(0, 0);
		}
	}

	@keyframes fade {
		0% {
			-webkit-transform: scale(1.25) translate(-20px, 15px);
					transform: scale(1.25) translate(-20px, 15px);
			-webkit-transform-origin: left;
					transform-origin: left;
			opacity: 1;
		}
		100% {
			-webkit-transform: scale(1.25) translate(-20px, 15px);
					transform: scale(1.25) translate(-20px, 15px);
			-webkit-transform-origin: left;
					transform-origin: left;
			opacity: 0;
		}
	}
</style>