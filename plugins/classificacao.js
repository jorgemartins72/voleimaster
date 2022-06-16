import _, { map } from 'underscore'

export default (context, inject) => {
	inject('classicacao', arr => {
		
		const jogosComResultados = arr.filter(j => j.pontos1 )
		const Temporadas = _.groupBy(jogosComResultados, t => t.temporada)
		const TurnosTemporada = t => {
			return _.groupBy(Temporadas[t], s => s.turno)
		}
		const GenerosTurno = (temp, turn) => {
			return _.groupBy(temp[turn], g => g.genero)
		}
		const CategoriasGeneros = (generos, gen) => {
			return _.groupBy(generos[gen], c => c.categoria)
		}
		const GruposCategoria = (categorias, cat) => {
			return _.groupBy(categorias[cat], g => g.grupo)
		}
		const EquipesGrupo = (groups, gr) => {
			const grupo = groups[gr]

			const equipesGrupo = []
			const jogosId = []
			grupo.map(i => {
				equipesGrupo.push(i.equipe1)
				jogosId.push(i._id)
			})

			grupo.map(i => {
				equipesGrupo.push(i.equipe2)
				jogosId.push(i._id)
			})

			const times = _.uniq(equipesGrupo).map( s => {
				const eq = { nome: s}
				
				const jogos = Jogos(grupo, jogosId, s)
				eq.jogos = jogos
				
				const Vitorias = s => {
					let v = 0
					s.map( i => v += i.vitoria )
					return v
				}
				const vitorias = Vitorias(jogos)

				const Derrotas = s => {
					let d = 0
					s.map( i => d += i.derrota )
					return d
				}
				const derrotas = Derrotas(jogos)

				const TotalSetsPro = s => {
					let sp = 0
					s.map( i => { sp += i.setspro } )
					return sp
				}
				const total_setspro = TotalSetsPro(jogos)

				const TotalSetsContra = s => {
					let sc = 0
					s.map( i => { sc += i.setscontra} )
					return sc
				}
				const total_setscontra = TotalSetsContra(jogos)

				const TotalWO = s => {
					let w = 0
					s.map( i => { w += i.wo} )
					return w
				}
				const total_wo = TotalWO(jogos)
				
				const avg = total_setscontra != 0 ? parseFloat((total_setspro / total_setscontra).toFixed(2)) : total_setspro
				const pontos = (vitorias * 2) + (derrotas - total_wo)

				eq.scores = {
					total_jogos: jogos.length,
					vitorias,
					derrotas,
					total_setspro,
					total_setscontra,
					total_wo,
					avg,
					pontos
				}

				return eq 
			})

			return times
		}
		
		const Jogos = (grupo, jogosIds, eq) => {

			const jogosEquipe1 = _.uniq(jogosIds).map( 
				x => grupo.filter( y => y._id == x && y.equipe1 == eq)
				.map(a => {

					const placar = Sets(a.pontos1, a.pontos2)
					const vitoria = placar[0] > placar[1] ? 1 : 0
					const derrota = placar[0] < placar[1] ? 1 : 0
					const wo = (a.pontos1[0] + a.pontos1[1]) == 0  ? 1 : 0

					return {
						parciais: [ a.pontos1, a.pontos2],
						placar,
						vitoria,
						derrota,
						setspro: placar[0],
						setscontra: placar[1],
						wo
					}
				})[0] 
			)

			const jogosEquipe2 = _.uniq(jogosIds).map( 
				x => grupo.filter( y => y._id == x && y.equipe2 == eq).map(a => {
					
					const placar = Sets(a.pontos2, a.pontos1)
					const vitoria = placar[0] > placar[1] ? 1 : 0
					const derrota = placar[0] < placar[1] ? 1 : 0
					const wo = (a.pontos2[0] + a.pontos2[1]) == 0  ? 1 : 0

					return {
						parciais: [ a.pontos2, a.pontos1],
						placar,
						vitoria,
						derrota,
						setspro: placar[0],
						setscontra: placar[1],
						wo
					}
				})[0]
			)

			return [...jogosEquipe1, ...jogosEquipe2].filter( f => f != null )
		}

		const Sets = (eq1, eq2) => {
			let sets = eq1.map( (v, k) => {
				return eq1[k] > eq2[k] ? [1, 0] : [0, 1]
			})

			let result = [0, 0]
			sets.forEach(i => {
				result[0] += i[0] 
				result[1] += i[1] 
			})

			return result
		}
		
		const rank = Object.keys(Temporadas).map(t => {
			
			const seasons = { nome: t }
			
			const turnostemps = TurnosTemporada(t)
			const shifts = Object.keys(turnostemps).map( sh => { // shifts = turnos
				
				const turn = { nome : sh }

				const generos = GenerosTurno(turnostemps, sh)
				turn.generos = Object.keys(generos).sort().map( gen=> {
					const genre = { nome: gen }
					
					const categorias = CategoriasGeneros(generos, gen)
					genre.categorias = Object.keys(categorias).sort().map( ct => {
						const cat = { nome: ct }

						const grupos = GruposCategoria(categorias, ct) 
						cat.grupos = Object.keys(grupos).sort().map( gr => {
							let group = { nome: gr }

							const equipes = EquipesGrupo(grupos, gr)
							group.equipes = equipes

							return group
						})
						return cat
					})
					
					return genre
				})

				return turn
			})
			
			seasons.turnos = shifts
			

			return seasons
		})

		return rank
	})
}

