import {TemporadasQuadraEstadual} from './quadra/competicoes/estadual/temporadas'
import {TemporadasQuadraCaboFrio} from './quadra/competicoes/cabofrio/temporadas'
import {TemporadasQuadraOpen} from './quadra/competicoes/open/temporadas'

import { ComissaoQuadra } from './quadra/comissao/comissao'

import {TemporadasPraiaEstadual} from './praia/competicoes/estadual/temporadas'
import {TemporadasPraiaCaboFrio} from './praia/competicoes/cabofrio/temporadas'
import {TemporadasPraiaOpen} from './praia/competicoes/open/temporadas'

import { ComissaoPraia } from './praia/comissao/comissao'

export const competicoes_quadra = {
	"estadual": TemporadasQuadraEstadual,
	"cabofrio": TemporadasQuadraCaboFrio,
	"open": TemporadasQuadraOpen,
}

export const ComissaoDeQuadra = ComissaoQuadra

export const competicoes_praia = {
	"estadual": TemporadasPraiaEstadual,
	"cabofrio": TemporadasPraiaCaboFrio,
	"open": TemporadasPraiaOpen
}

export const ComissaoDePraia = ComissaoPraia
