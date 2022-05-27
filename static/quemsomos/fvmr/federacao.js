import { Integrantes } from "./integrantes/integrantes"
import Textos from './_textos.json'

export const Federacao = {
	"titulo": "Sobre a FVMR",
	"integrantes": Integrantes,
	"textos": Textos,
	"regulamento": {
		"nome": "Regulamento",
		"texto": "Nostrum saepe hic impedit est accusantium animi exercitationem tempore.",
		"arquivos": [
			{
				"nome": "Arquivo do Regulamento", 
				"arquivo": "arquivoteste.pdf", 
				"data": "00/00/0000"
			},
			{
				"nome": "Arquivo do Regulamento", 
				"arquivo": "arquivoteste.pdf",
				"data": "00/00/0000"
			}
		]
	}
}
