const getUserData = async (req, res) => {
    try {
        return res.status(200).json({
            "id": req.user.id,
            "nome": req.user.nome,
            "email": req.user.email
        })
    } catch (error) {
        return res.status(500).json({ "mensagem": "mensagem de erro" })
    }
}

module.exports = getUserData