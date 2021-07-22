import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection();

import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";
import cors from 'cors';

import { router } from "./routes";
import { aphorismRouter } from "./routes/aphorismRoutes";

const app = express();
const PORT = 3030;

app.use(cors());
app.use(express.json());
app.use(router);
app.use(aphorismRouter);

app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
    if(err instanceof Error){
        if(err.message.includes("not found")){
            return response.status(404).json({
                error: err.message
            })
        }
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server Error"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})