# Desafio Técnico 2

## Descrição:

Implementação de uma API RESTful para autenticação de usuários, que permita operações de cadastro (sign up),
autenticação (sign in) e recuperação de informações do usuário.

## Endpoints

### `POST` `/signup `

- Cadastro de usuário
- Insira no body da requisição os dados em formato json. Exemplo:

```json
{
	"nome": "nome-do-usuario",
	"email": "usuario@gmail.com",
	"senha": "123",
	"telefones": [{
		"numero": "123456789",
		"ddd": "11"
	}, {
		"numero": "987654321",
		"ddd": "41"
	}]
}
```

### `POST` `/signin `

- Login de usuário
- Insira no body da requisição os dados em formato json. Exemplo:

```json
{
	"email": "usuario@gmail.com",
	"senha": "123"
}
```

### `GET` `/user `

- Insira o token retornado no [endpoint sign in](#post-signin) como Bearer Token

## Como usar:

### Opção 1: local host

1. Clone o repositório :
```command
git clone git@github.com:anapppp/escribo-desafio-tecnico-2.git
```
2. Instale as dependências no diretório clonado
```command
npm install
```
3. Crie um banco de dados local usando o arquivo [dump.sql](./dump.sql)
4. Insira as variáveis de ambiente em um arquivo `.env` seguindo o modelo `.env.example`.
5. Execute no terminal 
```command
 node .\src\index.js
```
6. Acesse os [endpoints](#endpoints) conforme descrito.

### Opção 2: deploy

- Acesse os [endpoints](#endpoints) usando o seguinte link 
  - https://desafio-2-escribo-b0688aa590db.herokuapp.com/

# Insomnia

Para facilitar o acesso a API você pode usar o [Insomnia](https://insomnia.rest/). São dispnibilizados nesse repositório os arquivos [Insomnia - localhost](./Insomnia%20-%20localhost) e [Insomnia - deploy](./Insomnia%20-%20deploy), os quais podem ser importados no Insomnia para acesso respectivamente via localhost e deploy.