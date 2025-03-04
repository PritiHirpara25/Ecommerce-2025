import mongoose from "mongoose";
import { EcomUser } from "../models/EcomUser";

const UserSchema  = new mongoose.Schema<EcomUser>({
    username:{type:String , required:true},
    email:{type:String , required:true , unique:true},
    password:{typr:String , required:true},
    imageUrl:{type:String , required:true},
    isAdmin:{type:Boolean , default:false}
} , {timestamps:true});

const UserTable = mongoose.model<EcomUser>('user',UserSchema);
export default UserTable;       