<template>
	<div class="relative bg-white pagina max-w-7xl mx-auto">

		<div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
			<svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
				<polygon points="50,0 100,0 50,100 0,100" />
			</svg>

			<div>
				<div class="relative pt-6 px-4 sm:px-6 lg:px-8" />
			</div>

			<main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
				<div class="sm:text-center lg:text-left">

					<h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
						<span class="block xl:inline">Fale conosco</span>
					</h1>
					<p class="mt-3 mb-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
						Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
					</p>


					<ValidationObserver v-slot="{ valid, reset }" ref="observer">

						<div class="bg-white md:w-3/5 lg:w-3/4 mx-auto lg:mx-0 space-y-4">
							<div>
								<ValidationProvider rules="required|nome_sobrenome" v-slot="{ errors }" :bails="false">
									<div class="text-left">
										<label for="nome" class="block text-sm font-medium text-gray-500">Nome</label>
										<input 
											name="nome"
											type="text" 
											class="focus:outline-none focus:ring-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded px-2 py-2 text-gray-700"
											:class="ringState(errors)"
											v-model="msg.nome"
										>
										<div class="text-red-500 text-sm">{{ errors[0] }}</div>
									</div>
								</ValidationProvider>
							</div>
							
							<div>
								<ValidationProvider rules="required|email" v-slot="{ errors }" :bails="false">
									<div class="text-left">
										<label for="email" class="block text-sm font-medium text-gray-500">Email</label>
										<input 
											type="text" 
											name="email" 
											class="focus:outline-none focus:ring-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded px-2 py-2 text-gray-700"
											:class="ringState(errors)"
											v-model="msg.email"
										>
										<div class="text-red-500 text-sm">{{ errors[0] }}</div>
									</div>
								</ValidationProvider>
							</div>
							
							<div>
								<ValidationProvider rules="required|min:3" v-slot="{ errors }" :bails="false">
									<div class="text-left">
										<label for="assunto" class="block text-sm font-medium text-gray-500">Assunto</label>
										<input 
											type="text" 
											name="assunto" 
											class="focus:outline-none focus:ring-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded px-2 py-2 text-gray-700"
											:class="ringState(errors)"
											v-model="msg.assunto"
										>
										<div class="text-red-500 text-sm">{{ errors[0] }}</div>
									</div>
								</ValidationProvider>
							</div>

							<div>
								<ValidationProvider v-slot="{ errors }" tag="div" name="menssagem" rules="required|min:10">
									<div class="text-left">
										<label class="block text-sm font-medium text-gray-500">Mensagem</label>
										<textarea 
											rows="3" 
											class="focus:outline-none focus:ring-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded px-2 py-2 text-gray-700"
											:class="ringState(errors)"
											placeholder="Sua mensagem"
											v-model="msg.message"
										/>
										<div class="text-red-500 text-sm">{{ errors[0] }}</div>
									</div>
								</ValidationProvider>
							</div>

						</div>

						<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
							<div class="relative overflow-hidden rounded-md shadow cursor-pointer select-none text-white">
								
								<div 
									class="absolute w-full h-full flex items-center justify-center bg-gray-700 opacity-60"
									:class="{hidden: !btnState}"
								/>
								
								<div 
									class="absolute w-full h-full flex items-center justify-center"
									:class="{hidden: !btnState}"
								>
									
									<svg class="h-9 w-9 animate-spin" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
										<circle cx="12" cy="12" r="9" />
										<path d="M12 12a8 8 0 0 0 8 4m-12.5 -2.5a12 12 0 0 0 8.5 6.5" />
										<path d="M12 12a8 8 0 0 0 8 4m-12.5 -2.5a12 12 0 0 0 8.5 6.5" transform="rotate(120 12 12)" />
										<path d="M12 12a8 8 0 0 0 8 4m-12.5 -2.5a12 12 0 0 0 8.5 6.5" transform="rotate(240 12 12)" />
									</svg>
									
								</div>

								<div 
									class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
									@click="send"
								>
									Enviar
								</div>
							</div>
						</div>

					</ValidationObserver>

				</div>
			</main>
		</div>
		<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			<img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/contatofoto.jpg" alt="">
		</div>

	</div>
</template>

<script>
	import { ValidationProvider, ValidationObserver } from 'vee-validate'

	export default {
		components: {
			ValidationProvider, ValidationObserver
		},
		data(){
			return {
				msg: {
					nome: '',
					email: '',
					assunto: '',
					message: ''
				},
				btnState: false
			}
		},
		methods: {
			ringState(state){
				if (state.length > 0){
					return 'border-red-500 focus:ring-red-500'
				} else {
					return 'focus:ring-indigo-500'
				}
			},
			async send(){
				const tudoValidado = await this.$refs.observer.validate()
				let data = {...this.msg}
				if(!tudoValidado){
					console.log('Algum item do fomulário não foi preenchido!')
				} else {

					this.btnState = true

					this.$axios.$post(
						'https://7plbfzd7pi.execute-api.us-east-1.amazonaws.com/mailform', 
						data
					)
					.then( 
						r => {
							// console.log(r)
							if(r.statusCode == 200){

								this.btnState = false

								this.$swal({
									icon: 'success',
									title: 'Obrigado por enviar sua mensagem',
									showConfirmButton: false,
									timer: 3000
								})

								this.msg = {
									nome: '',
									email: '',
									assunto: '',
									message: ''
								}

								this.$refs.observer.reset()
							}
						}
					)
					.catch( 
						e => {
							console.log(e)
							this.btnState = false
						}
					)

				}
			},
		}, 
	}
</script>

<style lang="scss" scoped>
	.overlay {
		width: 150%;
		height: 150%;
	}
</style>
