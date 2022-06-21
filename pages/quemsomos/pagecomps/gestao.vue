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

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-16 md:px-0">
				
				<div
					v-for="(item, k) in  gestao.objetivos" :key="k"
					class="w-full border border-gray-300 bg-white rounded-lg shadow-xl p-8 select-none mb-8 md:mb-0"
				>
					<div class="bg-indigo-900 text-white w-full rounded-3xl text-center py-3 font-inter-800 font-black uppercase text-lg -mt-14">
						{{item.titulo}}
					</div>
					<p class="mt-8 text-xl text-gray-700 text-center">{{item.texto}}</p>
				</div>

			</div>

		</div>

		<div class="md:px-8 mb-8 mt-12">
			<h3 class="mb-4 text-2xl font-black">Organograma</h3>
			<img src="/quemsomos/gestao/organograma.png" />
		</div>

		<div class="md:px-8 mb-8 mt-12">
			<h3 class="mb-4 text-2xl font-black">Mapa Estratégico</h3>

			<h4 class="text-2xl text-center font-extrabold mb-4 text-yellow-600">1. PESSOAS E APRENDIZADO</h4>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-16 md:px-0 mb-10">
				<div
					class="w-full border border-t-8 border-b-8 border-yellow-600 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
				>
					<p class="text-sm text-gray-700">
						1.1 Capacitar indivíduos para atuarem no desenvolvimento do Voleibol Master no Rio de Janeiro
					</p>
				</div>
				
				<div
					class="w-full border border-t-8 border-b-8 border-yellow-600 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
				>
					<p class="text-sm text-gray-700">
						1.2 Promover a integração e colaboração entre as diretorias da FVMR
					</p>
				</div>
				
				<div
					class="w-full border border-t-8 border-b-8 border-yellow-600 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
				>
					<p class="text-sm text-gray-700">
						1.3 Promover a integração entre as Comissões e os participantes das competições da FVMR
					</p>
				</div>
			</div>

			<h4 class="text-2xl text-center font-extrabold mb-2 text-gray-700">2. PROCESSOS INTERNOS</h4>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-16 md:px-0 mb-10">
				<div class="flex flex-col gap-3 colprocessint">
					<h5 class="text-center text-lg font-bold text-gray-700">Gestão e Governança</h5>
					<div
						class="w-full border border-t-8 border-b-8 border-gray-700 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
					>
						<p class="text-sm text-gray-700">
							2.1 Aplicar boas práticas de gestão com ética e transparência
						</p>
					</div>
					<div
						class="w-full border border-t-8 border-b-8 border-gray-700 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
					>
						<p class="text-sm text-gray-700">
							2.2 Maximizar a captação e utilização de recursos e otimizar os custos
						</p>
					</div>
					<div
						class="w-full border border-t-8 border-b-8 border-gray-700 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
					>
						<p class="text-sm text-gray-700">
							2.3 Gerenciar de modo meritocrático os recursos da entidade
						</p>
					</div>
				</div>

				<div class="flex flex-col gap-3 colprocessint">
					<h5 class="text-center text-lg font-bold text-gray-700">Social</h5>
					<div
						class="w-full border border-t-8 border-b-8 border-gray-700 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
					>
						<p class="text-sm text-gray-700">
							2.4 Promover o Esporte Master 
						</p>
					</div>
					<div
						class="w-full border border-t-8 border-b-8 border-gray-700 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
					>
						<p class="text-sm text-gray-700">
							2.5 Comunicar de forma eficaz as principais ações e resultados da FVMR
						</p>
					</div>
					<div
						class="w-full border border-t-8 border-b-8 border-gray-700 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
					>
						<p class="text-sm text-gray-700">
							2.6 Incentivar que indivíduos acima de 30 anos pratiquem esporte
						</p>
					</div>
				</div>

				<div class="flex flex-col gap-3 colprocessint">
					<h5 class="text-center text-lg font-bold text-gray-700">Esportivo</h5>
					<div
						class="w-full border border-t-8 border-b-8 border-gray-700 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
					>
						<p class="text-sm text-gray-700">
							2.7 Apoiar atletas e treinadores que participam de competições master
						</p>
					</div>
					<div
						class="w-full border border-t-8 border-b-8 border-gray-700 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
					>
						<p class="text-sm text-gray-700">
							2.8 Incentivar a utilização de serviços de saúde no esporte master
						</p>
					</div>
					<div
						class="w-full border border-t-8 border-b-8 border-gray-700 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
					>
						<p class="text-sm text-gray-700">
							2.9 Apoiar entidades esportivas que desenvolvem atividades relacionadas ao voleibol master
						</p>
					</div>
				</div>
				
			</div>

			<h4 class="text-2xl text-center font-extrabold mb-2 text-green-900">3. CLIENTES</h4>
			<div class="grid grid-cols-1 md:grid-cols-4 gap-6 px-16 md:px-0 mb-10">
				<div class="flex flex-col gap-3 colclient">
					<h5 class="text-center text-lg font-bold text-green-900">Atletas e Treinadores</h5>
					<div
						class="w-full border border-t-8 border-b-8 border-green-900 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
					>
						<p class="text-sm text-gray-700">
							3.1 Aprimorar a infraestrutura e serviços esportivos oferecidos pela FVMR para os atletas e treinadores
						</p>
					</div>
				</div>

				<div class="flex flex-col gap-3 colclient">
					<h5 class="text-center text-lg font-bold text-green-900">Entidades Esportivas</h5>
					<div
						class="w-full border border-t-8 border-b-8 border-green-900 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
					>
						<p class="text-sm text-gray-700">
							3.2 Auxiliar entidades esportivas que atuam no segmento master no aprimoramento da gestão
						</p>
					</div>
				</div>

				<div class="flex flex-col gap-3 colclient">
					<h5 class="text-center text-lg font-bold text-green-900">Parceiros</h5>
					<div
						class="w-full border border-t-8 border-b-8 border-green-900 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
					>
						<p class="text-sm text-gray-700">
							3.3 Maximizar o retorno do investimento proporcionando contrapartidas associadas aos valores do esporte master
						</p>
					</div>
				</div>

				<div class="flex flex-col gap-3 colclient">
					<h5 class="text-center text-lg font-bold text-green-900">Sociedade</h5>
					<div
						class="w-full border border-t-8 border-b-8 border-green-900 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
					>
						<p class="text-sm text-gray-700">
							3.4 Liderar o voleibol master no Rio de Janeiro de forma eficiente e transparente
						</p>
					</div>
				</div>
				
			</div>

			<h4 class="text-2xl text-center font-extrabold mb-4 text-indigo-900">4. RESULTADO</h4>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-16 md:px-0 mb-10">
				<div
					class="w-full border border-t-8 border-b-8 border-indigo-900 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
				>
					<p class="text-sm text-gray-700">
						4.1 Consolidar o patamar dos resultados do Voleibol Master Carioca no cenário nacional
					</p>
					<ul class="list-disc text-xs ml-3 text-gray-700">
						<li>Posição das equipes cariocas no quadro geral de todas as categorias do Campeonato Brasileiro da CBV</li>
						<li>Quantidade de equipes cariocas nas finais de cada categoria do Campeonato Brasileiro da CBV</li>
					</ul>
				</div>
				
				<div
					class="w-full border border-t-8 border-b-8 border-indigo-900 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
				>
					<p class="text-sm text-gray-700">
						4.2 Elevar a maturidade em gestão da FVMR 
					</p>
					<ul class="list-disc text-xs ml-3 text-gray-700">
						<li>Ética</li>
						<li>Transparência</li>
						<li>Meritocracia</li>
						<li>Profissionalismo</li>
					</ul>
				</div>
				
				<div
					class="w-full border border-t-8 border-b-8 border-indigo-900 bg-white rounded-xl shadow-xl px-4 py-3 select-none mb-8 md:mb-0"
				>
					<p class="text-sm text-gray-700">
						4.3 Fortalecer a imagem da FVMR e do Voleibol Master do Rio de Janeiro
					</p>
					<ul class="list-disc text-xs ml-3 text-gray-700">
						<li>Imagem da FVMR no cenário do Voleibol Master nacional</li>
						<li>Imagem dos atletas e treinadores masters cariocas no cenário do Voleibol Master nacional</li>
					</ul>
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
	.colprocessint div {
		min-height: 100px;
	}
	.colclient div {
		min-height: 120px;
	}
</style>