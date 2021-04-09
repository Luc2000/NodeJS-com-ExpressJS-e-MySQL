// Responsabilidade de CONFIGURAR O SERVIDOR.

const express = require('express');
const consign = require('consign');

module.exports = () => {
    const app = express()

    consign()
        .include('controllers')
        .into(app)

    return app    
}
        