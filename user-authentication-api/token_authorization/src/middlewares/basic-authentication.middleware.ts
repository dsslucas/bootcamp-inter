import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";


async function basicAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    
    //Tentativa e erro
    try {
        const authorizationHeader = req.headers['authorization'];

        if (!authorizationHeader) {
            throw new ForbiddenError('Credenciais não informadas');
        }

        const [authenticationType, token] = authorizationHeader.split(' ');

        if (authenticationType !== 'Basic' || !token) {
            throw new ForbiddenError('Tipo de authenticação inválido');
        }

        const tokenContent = Buffer.from(token, 'base64').toString('utf-8');

        //Separa o usuário e senha.
        const [username, password] = tokenContent.split(':');

        //Caso não hajam credenciais informadas em pelo menos um dos campos
        if (!username || !password) {
            throw new ForbiddenError('Credenciais não preenchidas');
        }

        const user = await userRepository.findByUsernameAndPassword(username, password);
        
        //Caso não encontre usuário e senha
        if (!user) {
            throw new ForbiddenError('Usuário ou senha inválidos!');
        }

        req.user = user;
        
        //Continua propagando com os middlewares e rotas
        next();
    } catch (error) {
        //Caso dê erro
        next(error);
    }
}

export default basicAuthenticationMiddleware;
