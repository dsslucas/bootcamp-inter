//Responsável pela configuração do banco de dados

//Import do Postgreees
import { Pool } from 'pg';

//Onde vamos conectar, podendo ser repositório local ou web
const connectionString = '';

//Aqui começa a conexão com o Banco de Dados
const db = new Pool({ connectionString });

export default db;
