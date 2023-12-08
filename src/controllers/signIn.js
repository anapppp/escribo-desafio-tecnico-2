require(`dotenv`).config();
const knex = require('../conection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signIn = async (req, res) => {
    const { email, senha } = req.body;

    try {
        if (!email || !senha) {
            return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
        }

        const user = await knex(
            'users').where({ email }).first();

        if (user === undefined) {
            return res.status(400).json({ mensagem: 'Usuário e/ou senha inválidos' });
        }

        const comparePassword = await bcrypt.compare(senha, user.senha);
        if (!comparePassword) {
            return res.status(401).json({ mensagem: 'Usuário e/ou senha inválidos' });
        }

        const now = new Date();
        const userLoggedIn = await knex('users').where({ email }).update({
            ultimo_login: now
        }).returning(['id', 'data_criacao', 'data_atualizacao', 'ultimo_login']);

        const token = jwt.sign({ id: user.id }, process.env.JWTPASSWORD, { expiresIn: '30min' });

        return res.status(200).json({ ...userLoggedIn[0], "token": token });

    } catch (error) {
        return res.status(500).json({ "mensagem": "mensagem de erro" });
    }
};

module.exports = signIn;