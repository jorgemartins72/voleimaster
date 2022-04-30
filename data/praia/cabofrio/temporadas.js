import PraiaCF2019e1 from './2019/cfpraia_etapa1_2019'
import PraiaCF2019e2 from './2019/cfpraia_etapa2_2019'
import PraiaCF2019e3 from './2019/cfpraia_etapa3_2019'
import PraiaCF2018e1 from './2018/cfpraia_etapa1_2018'
import PraiaCF2018e2 from './2018/cfpraia_etapa2_2018'
import PraiaCF2018e3 from './2018/cfpraia_etapa3_2018'

const temporada_2019 = [PraiaCF2019e1, PraiaCF2019e2, PraiaCF2019e3]
const temporada_2018 = [PraiaCF2018e1, PraiaCF2018e2, PraiaCF2018e3]

export const TemporadasPraiaCaboFrio = [
	...temporada_2019, 
	...temporada_2018, 
]
