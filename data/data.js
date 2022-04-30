import {TemporadasQuadraEstadual} from './quadra/estadual/temporadas'
import {TemporadasQuadraCaboFrio} from './quadra/cabofrio/temporadas'
import {TemporadasQuadraOpen} from './quadra/open/temporadas'

import {TemporadasPraiaEstadual} from './praia/estadual/temporadas'
import {TemporadasPraiaCaboFrio} from './praia/cabofrio/temporadas'
import {TemporadasPraiaOpen} from './praia/open/temporadas'

export const competicoes_quadra = {
	"quadra": {
		"estadual": TemporadasQuadraEstadual,
		"cabofrio": TemporadasQuadraCaboFrio,
		"open": TemporadasQuadraOpen,
	}
}

export const competicoes_praia = {
	"praia": {
		"estadual": TemporadasPraiaEstadual,
		"cabofrio": TemporadasPraiaCaboFrio,
		"open": TemporadasPraiaOpen
	}
}
