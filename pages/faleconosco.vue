<template>
	<div class="relative bg-white overflow-hidden pagina max-w-7xl mx-auto">
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


					<ValidationObserver v-slot="{ valid }" ref="observer">

						<div class="bg-white md:w-3/5 lg:w-3/4 mx-auto lg:mx-0 space-y-4">
							<div>
								<ValidationProvider rules="required|nome_sobrenome" v-slot="{ errors }" :bails="false">
									<div class="text-left">
										<label for="nome" class="block text-sm font-medium text-gray-500">Nome</label>
										<input 
											name="nome"
											type="text" 
											class="focus:outline-none focus:ring-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded px-2 py-2 text-gray-700"
											:class="{'border-red-500 focus:ring-red-500': errors.length > 0 }"
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
											class="focus:outline-none focus:ring-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded px-2 py-2 text-gray-700"
											:class="{'border-red-500 focus:ring-red-500': errors.length > 0 }"
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
											class="focus:outline-none focus:ring-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded px-2 py-2 text-gray-700"
											:class="{'border-red-500 focus:ring-red-500': errors.length > 0 }"
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
											class="focus:outline-none focus:ring-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded px-2 py-2 text-gray-700"
											:class="{'border-red-500 focus:ring-red-500': errors.length > 0 }"
											placeholder="Sua mensagem"
											v-model="msg.message"
										/>
										<div class="text-red-500 text-sm">{{ errors[0] }}</div>
									</div>
								</ValidationProvider>
							</div>

						</div>

						<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
							<div class="rounded-md shadow cursor-pointer select-none">
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
			}
		},
		computed:{
			validateNome(){
				return {
					'border-red-600': this.msgError.nome == false ? true : false 
				}
			}
		},
		methods: {
			async send(){
				const teste = await this.$refs.observer.validate()
				console.log('Envia!!!')
				console.log(teste)
			},
		}, 
	}
</script>

<style lang="scss" scoped>

</style>
