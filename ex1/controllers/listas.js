var mongoose = require('mongoose')

var Listas = require("../models/listas");

module.exports.list = () => {
    return Listas
        .find()
        .sort({_id:1})
        .exec()
}

module.exports.findById = id => {
    return Listas
        .findOne({_id : id})
        .exec()
}

module.exports.listByProduct = produto => {
    return Listas
        .find({"produtos.designacao" : produto})
        .exec()
}

module.exports.listByDate = data => {
    return Listas
        .find({data : { $gte: data}})
        .exec()
}

module.exports.listByCategory = () => {
    return Listas
    .aggregate([
        { $unwind: "$produtos" },  // Desfaz o array de produtos
        { $group: { _id: "$produtos.categoria" } },  // Agrupa por categoria
        { $sort: { _id: 1 } },  // Ordena alfabeticamente
        { $project: { _id: 0, categoria: "$_id" } }  // Projeta o resultado final
    ])
    .exec()
    .then(result => {
        return categorias = result.map(r => r.categoria);;
    });
}

module.exports.listByProducts = () => {
    return Listas
    .aggregate([
        { $unwind: "$produtos" },  // Desfaz o array de produtos
        { $group: { _id: "$produtos.designacao" } },  // Agrupa por categoria
        { $sort: { _id: 1 } },  // Ordena alfabeticamente
        { $project: { _id: 0, designacao: "$_id" } }  // Projeta o resultado final
    ])
    .exec()
    .then(result => {
        return produtos = result.map(r => r.designacao);;
    });
}

module.exports.insert = (lista) => {
    if((Listas.find({_id : lista._id}).exec()).length != 1){
        var newLista = new Listas(lista)
        return newLista.save()
    }
}

module.exports.insertProduct = (id ,produto) => {
    return Listas
        .findByIdAndUpdate(id,
        { $push: {produtos: produto}},
        { new : true})
        .exec()
}

module.exports.remove = (id) => {
    return Listas
        .findByIdAndDelete(id)
        .exec()
}

module.exports.removeProduct = (id , idProduto) => {
    return Listas
        .findByIdAndUpdate(id,
        { $pull: {produtos: {_id: idProduto}}},
        { new : true})
        .exec()
}

module.exports.update = (id, lista) => {
    return Listas
        .findByIdAndUpdate(id, lista, {new:true})
        .exec()
}