const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../config/apiEnv');

// Página principal
router.get('/', async (req, res, next) => {
  try {
    const response = await axios.get(config.apiRoute('/listas'));
    const listas = response.data;
    res.render('index', {
      title: 'Lista de Compras',
      listas
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
