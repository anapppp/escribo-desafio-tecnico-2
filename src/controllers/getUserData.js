const knex = require('../conection');

const getUserData = async (req, res) => {
    try {
        const telefones = await knex(
            'telefone').select('ddd', 'numero').where({ user_id: req.user.id });

        return res.status(200).json({
            "id": req.user.id,
            "nome": req.user.nome,
            "email": req.user.email,
            telefones
        });
    } catch (error) {
        return res.status(500).json({ "mensagem": "mensagem de erro" });
    }
};

module.exports = getUserData;