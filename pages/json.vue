<template>
	<div>
		{{datasite}}
	</div>
</template>

<script>
	import {ComissaoDeQuadra, competicoes_quadra, ComissaoDePraia, competicoes_praia } from '@/static/data'
	import {Noticias} from '@/static/noticias/noticias'

	export default {
		layout: 'teste',
		data(){
			return {
				datasite: {
					noticias: Noticias,
					praia: {
						competicoes: competicoes_praia,
						ComissaoDePraia
					},
					quadra: {
						competicoes: competicoes_quadra,
						ComissaoDeQuadra
					}
				}
			}
		}
	}
</script>
