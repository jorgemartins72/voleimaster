import _, { map } from 'underscore'

export default (context, inject) => {
	inject('classicacao', arr => {
		const jogos = arr.filter(j => j.pontos1 )
		const refTemporada = _.max(jogos, t => t.temporada).temporada
		const temporadas = _.groupBy(jogos, t => t.temporada)
		const turnos = _.groupBy(jogos, t => t.turno)
		const generos = _.groupBy(jogos, g => g.genero)
		const categorias = _.groupBy(jogos, c => c.categoria)

		const GetPlacar = (idJogo, equipe) => {
			const jogo = jogos.filter( i => i._id == idJogo)[0]
			return equipe == 1 ? jogo.pontos1 : jogo.pontos2
		}

		const Scores2 = (e, c) => {
			let partidasIds = _.map(_.where(jogos, {equipe2: e, categoria: c}), p => p._id)
			let partidas = partidasIds.map( p => {
				
				const pE1 = GetPlacar(p, 2)
				const pE2 = GetPlacar(p, 1)

				const sets = pE1.map( (v, k) => {
					return pE1[k] > pE2[k] ? [1, 0] : [0, 1]
				})

				let result = [0, 0]
				sets.forEach(i => {
					result[0] += i[0] 
					result[1] += i[1] 
				})
			
				let obj = {}
				obj.parciais = pE1
				obj.resultado = result
				obj.vitoria = result[0] > result[1] ? 1 : 0
				obj.derrota = result[0] < result[1] ? 1 : 0

				return obj
			})

			return partidas
		}

		const Scores1 = (e, c) => {
			let partidasIds = _.map(_.where(jogos, {equipe1: e, categoria: c}), p => p._id)
			let partidas = partidasIds.map( p => {
				
				const pE1 = GetPlacar(p, 1)
				const pE2 = GetPlacar(p, 2)

				const sets = pE1.map( (v, k) => {
					return pE1[k] > pE2[k] ? [1, 0] : [0, 1]
				})

				let result = [0, 0]
				sets.forEach(i => {
					result[0] += i[0] 
					result[1] += i[1] 
				})
			
				let obj = {}
				obj.parciais = pE1
				obj.resultado = result
				obj.vitoria = result[0] > result[1] ? 1 : 0
				obj.derrota = result[0] < result[1] ? 1 : 0

				return obj
			})

			return partidas
		}

		const Teams = (t, c) => {
			var equipes1 = t.map( i => i.equipe1 )
			var equipes2 = t.map( i => i.equipe2 )
			var equipes = _.uniq([...equipes1, ...equipes2])

			var equipeData = equipes.map( i => {

				const scores = [...Scores1(i, c), ...Scores2(i, c)]

				const Vitorias = s => {
					let v = 0
					s.map( i => v += i.vitoria )
					return v
				}

				const Derrotas = s => {
					let d = 0
					s.map( i => d += i.derrota )
					return d
				}


				return {
					equipe: i, 
					scores,
					jogos: scores.length,
					vitorias: Vitorias(scores),
					derrotas: Derrotas(scores)
				}
			})

			return equipeData
		}

		const Categs = (c, g) => {
			return c.map( i => {
				var obj = {}
				obj[i] = Teams(_.where(jogos, {categoria: i, genero: g}), i)
				return obj
			})
		}

		let rank = {}
		rank['temporadas'] = Object.keys(temporadas).map( t => {

			var obGeneros = {}
			obGeneros.gereros = Object.keys(generos).map( g => {
				var obj = {}
				var obCategs = {}
				obCategs.categorias = _.uniq(generos[g].map( c => c.categoria))

				obj[g] = {categorias: Categs( obCategs.categorias.sort(), g )}

				return obj
			})

			var obTurnos = {}
			obTurnos.turnos = Object.keys(turnos).map( t => {
				var obj = {}
				obj[t] = obGeneros

				return obj
			})

			var obTemps = {}
			obTemps[t] = obTurnos
			

			return obTemps
		})

		
		return rank
	})
}

