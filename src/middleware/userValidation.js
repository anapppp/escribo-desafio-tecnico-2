const knex = require('../conection')

async function email(req, res, next) {
    const { email } = req.body
    try {
        const validaEmail = await knex('users').where('email', '=', email).first()
        if (validaEmail) {
            return res.status(404).json({ mensagem: "E-mail já existente" })
        }
        next()
    } catch (error) {
        return res.status(401).json({ "mensagem": "mensagem de erro" })
    }
}

module.exports = { email }