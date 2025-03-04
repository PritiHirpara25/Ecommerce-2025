import { Request, Response } from "express";
import UserTable from "../database/UserSchema";
import { EcomUser } from "../models/EcomUser";
import bcryptjs from 'bcryptjs';
import gravatar from 'gravatar';
import { validationResult } from "express-validator";

/*
    @usage : Register User
    @method : POST
    @params : no-params
    @url : http://localhost:8888/register
*/
export const registerUser = async(request:Request , response:Response) => {
    const errors = validationResult(request);
    if(!errors.isEmpty){
        return response.status(400).json({ errors: errors.array() });
    }

    try{
        // read the form data
        let {username , email , password} = request.body;

        // check if the user is exists
        const userObj = await UserTable.findOne({email:email});
        if(userObj){
            return response.status(400).json({
                error:"The user already exists"
            })
        }

        // password encryption
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password , salt);


        // gravatar
        const imageUrl = gravatar.url(email , {
            size:"200",
            rating:"pg",
            default:"mm"
        });

        // insert to DB
        const newUser : EcomUser = {
            username:username,
            email:email,
            password:hashPassword,
            imageUrl:imageUrl,
            isAdmin:false
        }

        const theUserObj = await new UserTable(newUser).save();
        if(theUserObj){
            return response.status(200).json({
                data:theUserObj,
                msg:"You are Registered Successfully..."
            })
        }


    }catch(error:any){
        response.status(500).json({
            error: error.message
        })
    }
} 

/*
    @usage : Login User
    @method : POST
    @params : no-params
    @url : http://localhost:8888/login
*/
export const LoginUser = async(request:Request , response:Response) => {
    
}