import mongoose, { Schema } from "mongoose";
import { EcomSubCategory } from "../models/EcomSubCategory";

const SubCategorySchema = new mongoose.Schema<EcomSubCategory>({
    category_id : {type:Schema.Types.ObjectId , ref:"Category" , required:true},
    Sub_Category_name : {type:String , required:true},
    Sub_Category_description : {type:String , required:true},
    Sub_Category_logo : {type:String , required:true},
    isActive : {type:Boolean , default:true}
} , {timestamps:true});

const SubCategoryTable = mongoose.model<EcomSubCategory>("SubCategory", SubCategorySchema);
export default SubCategoryTable;