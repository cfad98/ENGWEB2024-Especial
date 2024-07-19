var express = require('express');
var router = express.Router();
var Listas = require('../controllers/listas');

router.get('/', function(req, res, next) {
    if (req.query.produto){
        Listas.listByProduct(req.query.produto)
            .then(data => {
                res.jsonp(data)
            })
            .catch( erro => {
                res.jsonp(erro)
            })

    } else if (req.query.data){
        Listas.listByDate(req.query.data)
            .then(data => {
                res.jsonp(data)
            })
            .catch(erro => {
                res.jsonp(erro)
            })

    } else {
        Listas.list()
            .then(data => {
                res.jsonp(data)
            })
            .catch(erro => {
                res.jsonp(erro)
            })
    }
    
});

router.get('/categorias', function(req, res, next) {
    Listas.listByCategory()
        .then(data => {
            res.jsonp(data)
        })
        .catch(erro => {
            res.jsonp(erro)
        })
});

router.get('/produtos', function(req, res, next) {
    Listas.listByProducts()
        .then(data => {
            res.jsonp(data)
        })
        .catch(erro => {
            res.jsonp(erro)
        })
});

router.get('/:id', function(req, res, next) {
    Listas.findById(req.params.id)
        .then(data => {
            res.jsonp(data)
        })
        .catch(erro => {
            res.jsonp(erro)
        })
});

router.post('/', function(req, res, next){
    Listas.insert(req.body)
        .then(data => {
            res.jsonp(data)
        })
        .catch(erro => {
            res.jsonp(erro)
        })
});

router.post('/:idLista/produtos', function(req,res,next){
    Listas.insertProduct(req.params.idLista, req.body)
        .then(data => {
            res.jsonp(data)
        })
        .catch(erro => {
            res.jsonp(erro)
        })
})

router.delete('/:id', function(req, res, next){
    Listas.remove(req.params.id)
        .then(data => {
            res.jsonp(data)
        })
        .catch(erro => {
            res.jsonp(erro)
        })
})

router.delete('/:idLista/produtos/:idProd', function(req, res, next){
    Listas.removeProduct(req.params.idLista, req.params.idProd)
        .then(data => {
            res.jsonp(data)
        })
        .catch(erro => {
            res.jsonp(erro)
        })
})

router.put('/:id', function(req,res,next){
    Listas.update(req.params.id, req.body)
        .then(data => {
            res.jsonp(data)
        })
        .catch(erro => {
            res.jsonp(erro)
        })
})

module.exports = router;