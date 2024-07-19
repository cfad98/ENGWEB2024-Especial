# Teste Época-Especial EngWeb2024

## Exercicio 1

### 1.1

Foi desenvolvido um script Python para preparar o dataset dataset.json para importação no MongoDB. O script realiza as seguintes etapas:

- Carregar o Dataset: O dataset original é carregado a partir do arquivo JSON.
- Adicionar o Parâmetro _id: Adiciona um campo _id a cada objeto da lista, com valores sequenciais começando de 1. Este campo é necessário para a importação correta no MongoDB, que utiliza _id como identificador único dos documentos.
- Salvar o Dataset Modificado: O dataset modificado é salvo em um novo arquivo dataset_modificado.json.
Este dataset foi importado para o mongo utilizando o comando: 
```
mongoimport -d compras -c listas --type json --file dataset_modificado.json --jsonArray
```

### 1.2

Ver ficheiro [queries.txt](./ex1/queries.txt) localizado na diretoria [./ex1](./ex1/), como solicitado no enunciado.

### 1.3 API de Dados

Para a criação deste projeto utilizou-se os seguintes comandos:
1. `npx express-generator --no-view ex1`
2. `npm install`
3. `npm install mongoose`

Todas as rotas foram definidas.
- GET /listas: Lista todas as listas de compras.
- GET /listas/:id: Obtém uma lista de compras pelo ID.
- GET /listas?produto=EEEE: Obtém listas de compras que contêm o produto EEEE.
- GET /listas?data=AAA: Obtém listas de compras com data maior ou igual a AAA.
- GET /listas/categorias: Lista categorias ordenadas e sem repetições.
- GET /listas/produtos: Lista produtos ordenados e sem repetições.
- POST /listas: Adiciona uma nova lista de compras.
- POST /listas/:idLista/produtos: Adiciona um produto a uma lista existente.
- DELETE /listas/:id: Remove uma lista pelo ID.
- DELETE /listas/:idLista/produtos/:idProd: Remove um produto de uma lista existente.
- PUT /listas/:id: Atualiza uma lista existente.

## Exercicio 2

### 2.1 APP (Interface)

Para a criação deste projeto utilizou-se os seguintes comandos:
1. `npx express-generator --view=pug ex2`
2. `npm install`
3. `npm install axios`

Todas as rotas foram definidas como solicitado no enunciado.


