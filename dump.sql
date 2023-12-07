CREATE TABLE IF NOT EXISTS users (
  	id serial primary key,
  	nome text,
  	email text unique not null,
  	senha text not null,
    data_criacao timestamp default current_timestamp,
    data_atualizacao timestamp default null,
    ultimo_login timestamp default null
);

CREATE TABLE IF NOT EXISTS telefone (
    id serial primary key,
    numero varchar(9),
    ddd varchar(2),
    user_id integer REFERENCES users(id) not null
);
