import json

# Carregar o dataset do arquivo
with open('dataset.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Adicionar o parâmetro _id em cada objeto da lista
for idx, obj in enumerate(data, start=1):
    obj["_id"] = idx

# Salvar o dataset modificado de volta para o arquivo
with open('dataset_modificado.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, ensure_ascii=False, indent=4)

print("O parâmetro _id foi adicionado com sucesso.")
