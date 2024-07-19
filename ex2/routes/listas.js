const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../config/apiEnv');

// Página de uma lista específica
router.get('/:id', async (req, res, next) => {
  try {
    const response = await axios.get(config.apiRoute(`/listas/${req.params.id}`));
    const lista = response.data;
    res.render('lista', {
      title: `Lista de Compras ${lista.designacao}`,
      lista
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
