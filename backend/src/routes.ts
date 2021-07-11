import { Router } from "express";

const router = Router();

router.get('/user', (req, res)=>{
    return res.send("hello world");
})

router.post('/user', (req, res)=>{
    return res.send("user created");
})

export {router};