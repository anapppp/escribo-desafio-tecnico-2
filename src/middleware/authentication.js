const jwt = require('jsonwebtoken');
const knex = require('../conection');
require('dotenv').config();

const superSecretKey = process.env.JWTPASSWORD;

async function authentication(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ "mensagem": 'Não autorizado' });
    }

    try {
        const token = authorization.split(' ')[1];
        const { id } = await jwt.verify(token, superSecretKey);
        const user = await knex('users').where({ id }).first();
        if (!user) {
            return res.status(401).json({ mensagem: 'Não autorizado' });
        }
        const { senha, ...authenticatedUser } = user;
        req.user = authenticatedUser;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError')
            return res.status(401).json({ "mensagem": 'Sessão inválida' });
        if (error.name === 'JsonWebTokenError')
            return res.status(401).json({ "mensagem": 'Não autorizado' });
        return res.status(401).json({ "mensagem": "mensagem de erro" });
    }
}

module.exports = authentication;