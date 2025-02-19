import mongoose from "mongoose";
import { EcomCategory } from "../models/EcomCategory";

const CategorySchema = new mongoose.Schema<EcomCategory>({
    category_name : {type:String , required:true},
    category_description : {type:String , required:true},
    category_logo : {type:String , required:true},
    isActive : {type:Boolean , default:false}
} , {timestamps:true});

const CategoryTable = mongoose.model<EcomCategory>("Category", CategorySchema);
export default CategoryTable;