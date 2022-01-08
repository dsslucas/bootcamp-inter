--Criação de tabelas e inserções

--Extensões necessárias para a criação da tabela e inserção de dados
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

--Cria uma tabela se não existir
CREATE TABLE IF NOT EXISTS application_user(
    -- ID unico, gera um hash
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
);
                                                                                --CHAVE PRIVADA
INSERT INTO application_user (username, password) VALUES ('Lucas', crypt('admin', 'my_salt'));
