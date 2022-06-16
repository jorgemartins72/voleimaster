import pandas
import json
from datetime import datetime
from jmutils import show, timestamp
import locale

locale.setlocale(locale.LC_ALL, 'pt_BR.utf8')

def corrige_data(d):
	dt = d['data'].split('/')
	datetime_object = datetime.strptime(dt[1], "%b")
	month_number = datetime_object.month
	dt[1] = month_number
	dts = datetime.strptime(f"{d['temporada']}/{dt[1]}/{dt[0]}", '%Y/%m/%d')
	d['data'] = dts.strftime("%Y-%m-%d")
	return d

def corrige_hora(d):
	d['hora'] = d['hora'].replace('h', ':')
	return d

def pontos1(d):
	if d['1set1']:
		lista = [int(d['1set1']), int(d['2set1'])]

		if d['3set1'] != 'x' and d['1set1'] != 0.0 and d['2set1'] != 0.0:
			lista.append(int(d['3set1']))

		if d['1set1'] == 0.0 and d['2set1'] == 0.0:
			d['pontos1'] = [0, 0]
		else:
			d['pontos1'] = lista

	if 'pontos1' not in d and d['1set1'] == 0.0 and d['2set1'] == 0.0:
		d['pontos1'] = [0, 0]

	return d

def pontos2(d):
	if d['1set2']:
		lista = [int(d['1set2']), int(d['2set2'])]

		if d['3set2'] != 'x' and d['1set2'] != 0.0 and d['2set2'] != 0.0:
			lista.append(int(d['3set2']))

		if d['1set2'] == 0.0 and d['2set2'] == 0.0:
			d['pontos2'] = [0, 0]
		else:
			d['pontos2'] = lista

	if 'pontos2' not in d and d['1set2'] == 0.0 and d['2set2'] == 0.0:
		d['pontos2'] = [0, 0]

	return d

def jogoInt(d):
	if d['jogo']:
		d['jogo'] = int(d['jogo'])
	return d

ts = timestamp()

def setId(d, id):
	globals()['ts'] = id + 1
	d['_id'] = str(ts)
	return d

def strTemporada(d):
	d['temporada'] = str(d['temporada'])
	return d

excel_data_df = pandas.read_excel('CampeonatoQuadra2022.xlsx')
jogos_importados = json.loads(excel_data_df.to_json(orient='records'))
jogosId = list(map(lambda y: setId(y, ts), jogos_importados))
cor_dt = list(map(lambda y: corrige_data(y), jogosId))
cor_hr = list(map(lambda y: corrige_hora(y), cor_dt))
p1 = list(map(lambda y: pontos1(y), cor_hr))

p2 = list(map(lambda y: pontos2(y), p1))

jogos = list(map(lambda y: jogoInt(y), p2))

# show(jogos)

with open('./static/jogos_quadra_estadual.json', 'w') as outfile:
	json.dump(jogosId, outfile, ensure_ascii=False, indent=4)
