var express = require('express');
var router = express.Router();
var axios = require('axios');
const config = require('../config/apiEnv');

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(config.apiRoute('/listas'))
    .then(response => {
      const listas = response.data;
      res.status(200).render('index', {
        title: 'Listas de Compras - Teste epoca Normal EngWeb2024',
        listas: listas
      });
    })
    .catch(error => {
      res.status(500).render('error', { message: "Something went wrong", error: error });
    });
});

/* GET /listas/:id -> página do registo */
router.get('/:id', function(req, res, next) {
  axios.get(config.apiRoute(`/listas/${req.params.id}`))
    .then(response => {
      const lista = response.data;
      res.status(200).render('lista', {
        title: `Lista ${req.params.id}`,
        lista: lista
      });
    })
    .catch(error => {
      res.status(500).render('error', { message: "Something went wrong", error: error });
    });
});

/* GET /produtos/:id -> página do produto */
router.get('/produtos/:id', function(req, res, next) {
  axios.get(config.apiRoute(`/listas`))
    .then(response => {
      const listas = response.data;
      const produto = listas
        .flatMap(lista => lista.produtos)
        .find(produto => produto._id === req.params.id);

      if (!produto) {
        return res.status(404).render('error', { message: "Produto não encontrado" });
      }

      const listasDoProduto = listas.filter(lista =>
        lista.produtos.some(p => p._id === produto._id)
      );

      res.status(200).render('produto', {
        title: `Produto ${req.params.id}`,
        produto: produto,
        listas: listasDoProduto
      });
    })
    .catch(error => {
      res.status(500).render('error', { message: "Something went wrong", error: error });
    });
});

module.exports = router;
