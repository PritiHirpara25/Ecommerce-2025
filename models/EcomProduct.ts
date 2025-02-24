import mongoose from "mongoose";

export interface EcomProduct{
    Sub_Category_id : mongoose.Types.ObjectId , 
    Product_name:string,
    Product_description:string,
    Product_image:string,
    Product_images:string[],
    Product_price:number,
    Product_brand:string,
    Product_quantity:number,
    isActive:boolean,
    createdAt? : Date,
    updatedAt? : Date
}