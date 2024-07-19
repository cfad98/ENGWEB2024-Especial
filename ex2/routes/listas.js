var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req,res,next){
    axios.get("http://localhost:18000/listas")
    .then(resp => {
      listas = resp.data
      console.log(listas)
      res.status(200).render("paginaListas", {'listas' : listas})
    })
    .catch(erro => {
      res.status(500).render("infoPage", {"title": "Erro", "message": erro})
    })
  });

  router.get('/:id', function(req,res,next){
    axios.get("http://localhost:18000/listas/" + req.params.id)
    .then(resp => {
      lista = resp.data
      console.log(lista)
      res.status(200).render("paginaLista", {'lista' : lista})
    })
    .catch(erro => {
      res.status(500).render("infoPage", {"title": "Erro", "message": erro})
    })
  });

  module.exports = router;