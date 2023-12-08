const knex = require('../conection');
const bcrypt = require('bcrypt');

const signUp = async (req, res) => {
    const { nome, email, senha, telefones } = req.body;
    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const now = new Date();
        const user = await knex('users').insert({
            nome: nome,
            email: email,
            senha: senhaCriptografada,
            data_criacao: now,
        }).returning(['id', 'data_criacao', 'data_atualizacao', 'ultimo_login']);

        for (let telefone of telefones) {
            await knex('telefone').insert({
                numero: telefone.numero,
                ddd: telefone.ddd,
                user_id: user[0].id
            });
        }

        return res.status(201).json({ ...user[0], "token": null });

    } catch (error) {
        return res.status(500).json({ "mensagem": "mensagem de erro" });
    }
};

module.exports = signUp;