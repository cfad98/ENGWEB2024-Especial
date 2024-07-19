const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../config/apiEnv');

// Página de um produto específico
router.get('/:id', async (req, res, next) => {
  try {
    const response = await axios.get(config.apiRoute(`/produtos/${req.params.id}`));
    const produto = response.data;
    const listasResponse = await axios.get(config.apiRoute(`/listas?produto=${req.params.id}`));
    const listas = listasResponse.data;
    res.render('produto', {
      title: `Produto ${produto.designacao}`,
      produto,
      listas
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
