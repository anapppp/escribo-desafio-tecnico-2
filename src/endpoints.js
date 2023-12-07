const express = require('express')
const interm = require('./intermediarios/indexIntermediarios')
const rotasUsuario = require('./controladores/usuario/indexUsuario')
const listarCategoria = require('./controladores/categoria/listarCategoria')
const login = require('./controladores/login/login')
const rotasCliente = require('./controladores/cliente/indexCliente')
const rotasProduto = require('./controladores/produto/indexProduto')
const rotasPedido = require('./controladores/pedidos/indexPedido')

const rotas = express();

rotas.get('/categoria', listarCategoria)
rotas.post('/usuario', interm.camposObrigatoriosUsuario, interm.validacoesUsuario.cadastro, rotasUsuario.cadastrarUsuario)
rotas.post('/login', login)

rotas.use(interm.autenticacao)
rotas.get('/usuario', rotasUsuario.detalharUsuario)
rotas.put('/usuario', interm.camposObrigatoriosUsuario, interm.validacoesUsuario.edicao, rotasUsuario.editarUsuario)

rotas.post('/produto', interm.validacoesCategoria, interm.camposObrigatoriosProduto, rotasProduto.cadastrarProduto)
rotas.put('/produto/:id', rotasProduto.editarProduto)
rotas.get('/produto', rotasProduto.listarProduto)
rotas.get('/produto/:id', rotasProduto.detalharProduto)
rotas.delete('/produto/:id', interm.validacoesProduto.excluir, rotasProduto.excluirProduto)  // desenvolver o intermediario 

rotas.post('/cliente', interm.camposObrigatoriosCliente, interm.validacoesCliente.cadastro, rotasCliente.cadastrarCliente)
rotas.put('/cliente/:id', interm.camposObrigatoriosCliente, interm.validacoesCliente.edicao, rotasCliente.editarCliente)
rotas.get('/cliente', rotasCliente.listarCliente)
rotas.get('/cliente/:id', rotasCliente.detalharCliente)

rotas.post('/pedido', rotasPedido.cadastrarPedido) // desenvolver rota  
rotas.get('/pedido', rotasPedido.listarPedido)  // desenvolver rota

module.exports = rotas;