import _, { map } from 'underscore'

import news20200330 from './20200330/noticia'
import news20210105 from './20210105/noticia'
import news20220509 from './20220509/noticia'
import news20200130 from './20200130/noticia'
import news20201231 from './20201231/noticia'
import news20220502 from './20220502/noticia'
import news20200501 from './20200501/noticia'
import news20191201 from './20191201/noticia'
import news20220513 from './20220513/noticia'
import news20220513_1 from './20220513_1/noticia'

let news = [
	news20200330,
	news20220509,
	news20200130,
	news20201231,
	news20220502,
	news20200501,
	news20191201,
	news20210105,
	news20220513,
	news20220513_1
]

export const Noticias = _.sortBy(news, 'date').reverse()