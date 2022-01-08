//Todo o código responsável por acessar o Banco de Dados

import db from '../db';
import User from '../models/user.model';
import DatabaseError from '../models/errors/database.error.model';

class UserRepository {

    //Lembrando que toda função assíncrona DEVE TER uma promise!

    async findAllUsers(): Promise<User[]> {
        const query = `
            SELECT uuid, username
            FROM application_user
        `;

        //Necessita de um await. db.query... é UMA PROMISE!
        const { rows } = await db.query<User>(query);

        //Retornará uma lista de users
        return rows || [];
    }

    //Permite encontrar por ID
    async findById(uuid: string): Promise<User> {

        //Tentativa e erro, para tratar possíveis erros
        try {
            //Código SQL
            const query = `
                SELECT uuid, username
                FROM application_user
                WHERE uuid = $1
            `;
    
            const values = [uuid];
            
            //Na linha, encontra o ID e os valores correspondentes
            const { rows } = await db.query<User>(query, values);

            const [user] = rows;
    
            return user;
        } catch (error) {
            throw new DatabaseError('Erro na consulta por ID', error);
        }
    }

    //Função de inserir. Retorna uma promise
    async create(user: User): Promise<string> {
        const script = `
            INSERT INTO application_user (
                username,
                password
            )
            VALUES ($1, crypt($2, 'my_salt'))
            RETURNING uuid
        `;

        const values = [user.username, user.password];

        //<> representa RETORNO
        const { rows } = await db.query<{ uuid: string }>(script, values);
        const [newUser] = rows;
        return newUser.uuid;
    }

    //Método PUT no users.route.ts. Realiza alterações.
    async update(user: User): Promise<void> {
        const script = `
            UPDATE application_user 
            SET 
                username = $1,
                password = crypt($2, 'my_salt')
            WHERE uuid = $3
        `;

        const values = [user.username, user.password, user.uuid];
        await db.query(script, values);
    }

    //Remove um dado do banco
    async remove(uuid: string): Promise<void> {
        const cript = `
            DELETE
            FROM application_user
            WHERE uuid = $1
        `;

        //Values
        const values = [uuid];

        //Aguarda o resultado do banco de dados, informando a exclusão
        await db.query(cript, values);
    }

}

export default new UserRepository();
