//Rotas relativas aos tokens de autorização

import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

//token compoxto de três partes 
import JWT from 'jsonwebtoken';
import basicAuthenticationMiddleware from '../middlewares/basic-authentication.middleware';
import ForbiddenError from '../models/errors/forbidden.error.model';

const authorizationRoute = Router();

//Middleware fica no meio-campo da autenticação
authorizationRoute.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user;

        //Caso haja problemas com o usuário
        if (!user) {
            throw new ForbiddenError('Usuário não informado!');
        }

        const jwtPayload = { username: user.username };
        const jwtOptions = { subject: user?.uuid };
        const secretKey = 'my_secret_key';

        //Token para autenticação
        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

        //Devolve
        res.status(StatusCodes.OK).json({ token: jwt });
    } catch (error) {
        next(error);
    }
});


export default authorizationRoute;
