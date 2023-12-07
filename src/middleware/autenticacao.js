const jwt = require('jsonwebtoken')
const knex = require('../conection')
require('dotenv').config()

const senhaSecreta = process.env.JWTPASSWORD

async function autenticacao(req, res, next) {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ mensagem: 'Este usuário não está autorizado.' })
    }

    try {
        const token = authorization.split(' ')[1]
        const { id } = jwt.verify(token, senhaSecreta)
        const usuario = await knex('usuarios').where({ id }).first()
        if (!usuario) {
            return res.status(401).json({ mensagem: 'Este usuário não está autorizado.' })
        }

        const { senha, ...usuarioSemSenha } = usuario
        req.usuario = usuarioSemSenha
        next()

    } catch (error) {
        return res.status(401).json({ mensagem: "Falha na autenticação." })
    }
}

module.exports = autenticacao