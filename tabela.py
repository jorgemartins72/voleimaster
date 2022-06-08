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
	dts = datetime.strptime(f"{d['ano']}/{dt[1]}/{dt[0]}", '%Y/%m/%d')
	d['data'] = dts.strftime("%Y-%m-%d")
	return d

def corrige_hora(d):
	d['hora'] = d['hora'].replace('h', ':')
	return d

def pontos1(d):
	if d['1set1']:
		lista = [int(d['1set1']), int(d['2set1'])]
		if d['3set1'] != 'x':
			lista.append(d['3set1'])
		d['pontos1'] = lista
	return d

def pontos2(d):
	if d['1set2']:
		lista = [int(d['1set2']), int(d['2set2'])]
		if d['3set2'] != 'x':
			lista.append(d['3set2'])
		d['pontos2'] = lista
	return d

def jogoInt(d):
	if d['jogo']:
		d['jogo'] = int(d['jogo'])
	return d

ts = timestamp()

def setId(d, id):
	globals()['ts'] = id + 1
	d['_id'] = ts
	return d

excel_data_df = pandas.read_excel('CampeonatoQuadra2022.xlsx')
jogos_importados = json.loads(excel_data_df.to_json(orient='records'))
cor_dt = list(map(lambda y: corrige_data(y), jogos_importados))
cor_hr = list(map(lambda y: corrige_hora(y), cor_dt))
p1 = list(map(lambda y: pontos1(y), cor_hr))
p2 = list(map(lambda y: pontos2(y), p1))
jogos = list(map(lambda y: jogoInt(y), p2))
jogosId = list(map(lambda y: setId(y, ts), jogos))

show(jogosId[:-70])

with open('./static/jogos.json', 'w') as outfile:
	json.dump(jogosId, outfile, ensure_ascii=False, indent=4)
