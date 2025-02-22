import mongoose, { mongo } from 'mongoose';
import { EcomProduct } from '../models/EcomProduct';

const ProductSchema = new mongoose.Schema<EcomProduct>({
    Sub_Category_id:{type:String,required:true},
    Product_name:{type:String,required:true},
    Product_description:{type:String,required:true},
    Product_image:{type:String,required:true},
    Product_images:{type:[String],required:true},
    Product_price:{type:String,required:true},
    Product_brand:{type:String,required:true},
    Product_quantity:{type:Number,required:true},
    isActive:{type:Boolean , default:true}
},{timestamps:true})

const ProductTable = mongoose.model<EcomProduct>("Products",ProductSchema);
export default ProductTable;