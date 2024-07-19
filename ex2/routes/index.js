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
router.get('/listas/:id', function(req, res, next) {
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

module.exports = router;
