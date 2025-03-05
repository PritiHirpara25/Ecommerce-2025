import { Request, Response, Router } from "express";
import * as UserController from '../controller/UserController'
import {body} from 'express-validator'
import { TokenMiddleware } from "../middleware/TokenMiddleware";

const userRouter:Router = Router();

/*
    @usage : Register User
    @method : POST
    @params : no-params
    @url : http://localhost:8888/register
*/
userRouter.post('/register' ,[
    body('username').not().isEmpty().withMessage("Username is Reuired"),
    body('email').isEmail().withMessage("Proper Email is Required"),
    body('password').isStrongPassword().withMessage("String Password is Required")
], async(request:Request , response:Response) => {
    await UserController.registerUser(request , response);
});

/*
    @usage : Login User
    @method : POST
    @params : no-params
    @url : http://localhost:8888/login
*/
userRouter.post('/login',TokenMiddleware ,[
    body('email').isEmail().withMessage("Proper Email is Required"),
    body('password').isStrongPassword().withMessage("String Password is Required")
], async(request:Request , response:Response) => {
    await UserController.LoginUser(request , response);
});

export default userRouter;