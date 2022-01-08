import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import DatabaseError from '../models/errors/database.error.model';
import userRepository from '../repositories/user.repository';

const usersRoute = Router();

//Equivalente ao criado pelo Backend, mas com uso de try/catch e await para a consulta com o BD

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).send(users);
});

//Consulta GET via ID
usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    //Método para tratamento de erros
    try {
        const uuid = req.params.uuid;
        const user = await userRepository.findById(uuid);
        res.status(StatusCodes.OK).send(user);
    } catch (error) {
        next(error);
    }
});

//POST, é um INSERT no BD.
usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    const uuid = await userRepository.create(newUser);
    res.status(StatusCodes.CREATED).send(uuid);
});

//Método PUT, edita no Banco.
usersRoute.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    //Pega os IDs
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    //Realiza as alterações
    modifiedUser.uuid = uuid;

    //Manda o update para o BD
    await userRepository.update(modifiedUser);

    res.status(StatusCodes.OK).send();
});

//Método DELETE. Realiza a exclusão no BD
usersRoute.delete('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    await userRepository.remove(uuid);
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;
