import mongoose from "mongoose";

export interface EcomSubCategory{
    category_id : mongoose.Types.ObjectId,
    Sub_Category_name : string,
    Sub_Category_description : string, 
    Sub_Category_logo : string, 
    isActive : boolean,
    createdAt? : Date,
    updatedAt? : Date
}