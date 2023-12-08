const express = require('express')
const mid = require('./middleware/middIndex')
const userEndpoint = require('./controllers/userIndex')

const endPoints = express();

endPoints.post('/signup', mid.userValidation.email, userEndpoint.signUp)
endPoints.post('/signin', userEndpoint.signIn)

// Usuario logado
endPoints.use(mid.authentication)
endPoints.get('/user', userEndpoint.getUserData)

module.exports = endPoints