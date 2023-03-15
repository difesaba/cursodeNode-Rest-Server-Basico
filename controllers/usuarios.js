const { response } = require('express');

const usuariosGet = (req, res = response) => {
    //obtener la queryString
    const {nombre,q} = req.query;
    res.json({
        msg: 'Get API - Controller',
        nombre,
        q
    });
}

const usuariosPost = (req, res = response) => {
    const { nombre = 'No Name', edad } = req.body;
    res.json({
        msg: 'Post API - Controller',
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {
    const id= req.params.id;
    res.json({
        msg: 'Put API - Controller'
        ,id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Put API - Controller'
    });
}

const usuariosPath = (req, res = response) => {
    res.json({
        msg: 'Patch API - Controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPath
}