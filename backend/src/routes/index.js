const express = require('express');
const authRoutes = require('./authRoutes');
const fretesRoutes = require('./fretesRoutes');
const contatosRoutes = require('./contatosRoutes');
const ordensRoutes = require('./ordensRoutes');

// Exportando todas as rotas
module.exports = {
    authRoutes,
    fretesRoutes,
    contatosRoutes,
    ordensRoutes
};