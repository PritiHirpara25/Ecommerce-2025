import { Request, Response, Router } from "express";
import * as UserController from '../controller/UserController'

const userRouter:Router = Router();

/*
    @usage : Register User
    @method : POST
    @params : no-params
    @url : http://localhost:8888/register
*/
userRouter.post('/register' , async(request:Request , response:Response) => {
    await UserController.registerUser(request , response);
});

/*
    @usage : Login User
    @method : POST
    @params : no-params
    @url : http://localhost:8888/login
*/
userRouter.post('/login' , async(request:Request , response:Response) => {
    await UserController.LoginUser(request , response);
});