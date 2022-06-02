import _, { map } from 'underscore'

export const jogosdias = [
	{
		date: "2022-05-20",
		rodada: "8ª Rodada",
		partidas:[
			{
				hora: "10:00",
				local: "Clube dos Securitários",
				genero: "MASCULINO",
				categoria: "35+",
				partida:[
					{
						equipe: "CASTELO",
						pontos: [25, 20, 11]
					},
					{
						equipe: "VP MASTER TEAM",
						pontos: [20, 25, 15]
					}
				]
			},
			{
				hora: "11:00",
				local: "Clube dos Securitários",
				genero: "MASCULINO",
				categoria: "55+",
				partida:[
					{
						equipe: "VOLEISSAUROS",
						pontos: [25, 25]
					},
					{
						equipe: "MUNDO VÔLEI",
						pontos: [20, 23]
					}
				]
			},
			{
				hora: "12:00",
				local: "Clube dos Securitários",
				genero: "MASCULINO",
				categoria: "45+",
				partida:[
					{
						equipe: "VOLEISSAUROS",
						pontos: [25, 25]
					},
					{
						equipe: "CAXIAS VÔLEI MASTER",
						pontos: [20, 23]
					}
				]
			},
			{
				hora: "13:00",
				local: "Clube dos Securitários",
				genero: "MASCULINO",
				categoria: "45+",
				partida:[
					{
						equipe: "PHENIX",
						pontos: [25, 25]
					},
					{
						equipe: "FLUMINENSE F.C.",
						pontos: [20, 23]
					}
				]
			},
			{
				hora: "14:00",
				local: "Clube dos Securitários",
				genero: "MASCULINO",
				categoria: "35+",
				partida:[
					{
						equipe: "CARIOCAS DA GEMA",
						pontos: [25, 20, 11]
					},
					{
						equipe: "MAGÉ VOLEIBOL",
						pontos: [20, 25, 15]
					}
				]
			},
		]
	},
	{
		date: "2022-05-21",
		rodada: "8ª Rodada",
		partidas:[
			{
				hora: "12:00",
				local: "Clube dos Securitários",
				genero: "MASCULINO",
				categoria: "50+",
				partida:[
					{
						equipe: "PRO COMBAT"
					},
					{
						equipe: "MUNDO VÔLEI B"
					}
				]
			},
			{
				hora: "13:00",
				local: "Clube dos Securitários",
				genero: "MASCULINO",
				categoria: "50+",
				partida:[
					{
						equipe: "PHENIX"
					},
					{
						equipe: "UNIMASTER"
					}
				]
			},
			{
				hora: "14:30",
				local: "Clube dos Securitários",
				genero: "MASCULINO",
				categoria: "50+",
				partida:[
					{
						equipe: "A.A. LIGHT"
					},
					{
						equipe: "MUNDO VÔLEI A"
					}
				]
			},
			{
				hora: "15:45",
				local: "Clube dos Securitários",
				genero: "MASCULINO",
				categoria: "30+",
				partida:[
					{
						equipe: "VOLEI IGUAÇUANO"
					},
					{
						equipe: "MAGÉ VOLEIBOL"
					}
				]
			},
			{
				hora: "17:00",
				local: "Clube dos Securitários",
				genero: "MASCULINO",
				categoria: "30+",
				partida:[
					{
						equipe: "CARIOCAS DA GEMA"
					},
					{
						equipe: "MUNDO VÔLEI"
					}
				]
			},
		]
	},
	{
		date: "2022-05-14",
		rodada: "7ª Rodada",
		partidas:[
			{
				hora: "11:30",
				local: "Clube dos Securitários",
				genero: "FEMININO",
				categoria: "40/45+",
				partida:[
					{
						equipe: "MUNDO VÔLEI",
						pontos: [25, 25]
					},
					{
						equipe: "SANTA CRUZ VÔLEI RSV",
						pontos: [20, 23]
					}
				]
			}
		]
	},
	{
		date: "2022-05-15",
		rodada: "7ª Rodada",
		partidas:[
			{
				hora: "12:00",
				local: "Clube dos Securitários",
				genero: "MASCULINO",
				categoria: "55+",
				partida:[
					{
						equipe: "A.A. LIGHT",
						pontos: [25, 25]
					},
					{
						equipe: "BOTAFOGO",
						pontos: [20, 23]
					}
				]
			},
			{
				hora: "14:00",
				local: "Clube dos Securitários",
				genero: "MASCULINO",
				categoria: "55+",
				partida:[
					{
						equipe: "MUNDOVOLEI",
						pontos: [21, 20]
					},
					{
						equipe: "MRV",
						pontos: [25, 25]
					}
				]
			},
			{
				hora: "15:00",
				local: "Clube dos Securitários",
				genero: "MASCULINO",
				categoria: "45+",
				partida:[
					{
						equipe: "FLUMINENSE F.C.",
						pontos: [25, 25]
					},
					{
						equipe: "CAXIAS VOLEI MASTER",
						pontos: [21, 20]
					}
				]
			},
			{
				hora: "15:45",
				local: "Clube dos Securitários",
				genero: "MASCULINO",
				categoria: "45+",
				partida:[
					{
						equipe: "VOLEISSAUROS",
						pontos: [21, 20]
					},
					{
						equipe: "MUNDO VÔLEI",
						pontos: [25, 25]
					}
				]
			},
			{
				hora: "17:00",
				local: "Clube dos Securitários",
				genero: "MASCULINO",
				categoria: "35+",
				partida:[
					{
						equipe: "FLUMINENSE F.C.",
						pontos: [25, 20, 11]
					},
					{
						equipe: "VP MASTER TEAM",
						pontos: [20, 25, 15]
					}
				]
			},
		]
	},
]

export const Jogos = _.sortBy(jogosdias, 'date').reverse()
