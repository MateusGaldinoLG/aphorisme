import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
dotenv.config();

const JWTKey = process.env.TOKEN_KEY;

interface IPayload{
    sub: string
}

function ensureAuthenticated(req: Request, res: Response, next: NextFunction){

    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).end();
    }

    const [,token] = authToken.split(" ");

    try {
        const {sub} = verify(token, JWTKey!) as IPayload;
        req.user_id = sub;
    } catch (error) {
        return res.status(401).end();
    }

    return next();

}

export {ensureAuthenticated};