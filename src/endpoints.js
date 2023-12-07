const express = require('express')
const mid = require('./middleware/middIndex')
const userEndpoint = require('./controllers/userIndex')

const endPoints = express();

// cadastro
endPoints.post('/signup', mid.userValidation.email, userEndpoint.signUp)
// autenticação
endPoints.post('/signin', userEndpoint.signIn)
// recuperação de informações do usuário.
endPoints.use(mid.authentication)
endPoints.get('/user', userEndpoint.getUserData)

module.exports = endPoints