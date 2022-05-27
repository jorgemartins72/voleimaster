import json
def create():
	with open('vmdb.json', 'w') as outfile:
		json.dump('{}', outfile)

try:

	with open('vmdb.json') as f:
		db = json.load(f)
		print(db)

except FileNotFoundError as e:
	print(e, 'Arquivo não encontrado')
	create()



