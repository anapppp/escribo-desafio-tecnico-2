const express = require('express')
const midd = require('./middleware/middIndex')
const userEndpoint = require('./controllers/userIndex')

const endPoints = express();

// cadastro
endPoints.post('/user', userEndpoint.signUp)
// autenticação
endPoints.post('/user', userEndpoint.signIn)
// recuperação de informações do usuário.
endPoints.use(midd.authentication)
endPoints.get('/user', userEndpoint.getUserData)

module.exports = endPoints