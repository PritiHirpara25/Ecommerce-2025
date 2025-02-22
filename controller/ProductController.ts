import {Request , Response} from 'express';
import ProductTable from "../database/ProductSchema";
import mongoose from 'mongoose';
import { EcomProduct } from '../models/EcomProduct';

/*
    @usage : create a Product
    @method : POST
    @params : no-params
    @url : http://localhost:8888/product
*/
export const createProduct = async(request:Request , response:Response) => {
    let {Sub_Category_id , Product_name, Product_description , Product_image , Product_images , Product_price , Product_brand , Product_quantity , isActive } = request.body;
    try{
        const theProduct = await new ProductTable({
            Sub_Category_id:Sub_Category_id,
            Product_name:Product_name,
            Product_description:Product_description,
            Product_image:Product_image,
            Product_images:Product_images,
            Product_price:Product_price,
            Product_brand:Product_brand,
            Product_quantity:Product_quantity,
            isActive:isActive
        }).save();
        if(theProduct){
            return response.status(200).json(theProduct)
        }
        else{
            return response.status(404).json({msg:"Not Insertd yet"})
        }
    }
    catch{
        return response.status(500).json({msg:"Something went wrong"})
    }
}

/*
    @usage : get a product by Id
    @method : GET
    @params : productId
    @url : http://localhost:8888/product/:productId
*/

export const getProductById = async(request:Request, response:Response) => {
    let {productId} = request.params;
    const mongoProductId = new mongoose.Types.ObjectId(productId);
    try{
        const theProduct : EcomProduct | null | undefined = await ProductTable.findById(mongoProductId);
        if(theProduct){
            return response.status(200).json(theProduct)
        }
        else{
            return response.status(404).json({msg:"No Data Found"});
        }
    }
    catch{
        return response.status(500).json({msg:"Something went Wrong"});
    }
}

/*
    @usage : get all product
    @method : GET
    @params : no-params
    @url : http://localhost:8888/product
*/
export const getAllProductById = async(request:Request,response:Response) => {
    try{
        let theProduct : EcomProduct[] | null | undefined = await ProductTable.find();
        if(theProduct){
            return response.status(200).json(theProduct);
        }
        else{
            return response.status(404).json({msg:"Not Found Any Products"});
        }
    }
    catch{
        return response.status(500).json("Something Went Wrong");
    }
}

/*
    @usage : Update Product by Id
    @method : PUT
    @params : productId
    @url : http://localhost:8888/product/:productId
*/
export const updateProductById = async(request:Request, response:Response) => {
    let {productId} = request.params;
    let {Sub_Category_id , Product_name, Product_description , Product_image , Product_images , Product_price , Product_brand , Product_quantity , isActive } = request.body;
    try{
        const mongoProductId = new mongoose.Types.ObjectId(productId)
        const theProduct :EcomProduct | null | undefined = await ProductTable.findByIdAndUpdate(mongoProductId,{
            Sub_Category_id:Sub_Category_id,
            Product_name:Product_name,
            Product_description:Product_description,
            Product_image:Product_image,
            Product_images:Product_images,
            Product_price:Product_price,
            Product_brand:Product_brand,
            Product_quantity:Product_quantity,
            isActive:isActive
        }) 
        if(theProduct){
            return response.status(200).json({msg:"Updated Successfully",data:theProduct})
        }
        else{
            return response.status(404).json({msg:"Product not found"})
        }
    }
    catch{
        return response.status(500).json({msg:"Something Went Wrong"})
    }
}