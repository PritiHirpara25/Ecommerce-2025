import {Request , Response} from 'express'
import mongoose from 'mongoose';
import SubCategoryTable from '../database/SubCategorySchema';
import { EcomSubCategory } from '../models/EcomSubCategory';

/*
    @usage : craete a SubCategory
    @method : POST
    @params : no-params
    @url : http://localhost:8888/subcategory
*/
export const createSubCategory = async (request:Request , response:Response) => {
    let {category_id , Sub_Category_name , Sub_Category_description , Sub_Category_logo , isActive} = request.body;
    const theSubCategory = await new SubCategoryTable({
        category_id:category_id,
        Sub_Category_name:Sub_Category_name,
        Sub_Category_description:Sub_Category_description,
        Sub_Category_logo:Sub_Category_logo,
        isActive:isActive
    }).save();
    if(theSubCategory){
        return response.status(200).json({
            data:theSubCategory,
            msg:"SubCategory successfully creaated"
        })
    }
    else{
        return response.status(404).json("not created yet!")
    }
}

/*
    @usage : get subCategory by Id
    @method : GET
    @params : subcategoryId
    @url : http://localhost:8888/subcategory/:subcategoryId
*/
export const getSubCategoryById = async (request:Request , response:Response) => {
    let {subcategoryId} = request.params;
    let mongoSubCategoryId = new mongoose.Types.ObjectId(subcategoryId)
    const theSubCategory : EcomSubCategory | null | undefined = await SubCategoryTable.findById(mongoSubCategoryId);
    if(theSubCategory){
        return response.status(200).json(theSubCategory)
    }
    else{
        return response.status(404).json({
            data:null,
            msg:"No SubCategory Found"
        })
    }
}

/*
    @usage : get All SubCategory
    @method : GET
    @params : no-params
    @url : http://localhost:8888/subcategory
*/
export const getAllSubCategory = async (request: Request, response: Response) => {
    try {
        let theCategory: EcomSubCategory[]  | undefined = await SubCategoryTable.find();
        if(theCategory){
            return response.status(200).json(theCategory)
        }
    }
    catch(err){
        return response.status(404).json({msg:"not Found any Category"})
    }
}



/*
    @usage : update SubCategory by Id
    @method : PUT
    @params : subcategoryId
    @url : http://localhost:8888/subcategory/:subcategoryId
*/
export const updateSubCategoryById = async (request:Request , response:Response) => {
    let {category_id , Sub_Category_name , Sub_Category_description , Sub_Category_logo , isActive} = request.body;
    let {subcategoryId} = request.params;
    let mongoSubCategoryId = new mongoose.Types.ObjectId(subcategoryId)
    const theSubCategory : EcomSubCategory | null | undefined = await SubCategoryTable.findByIdAndUpdate(mongoSubCategoryId , {
        category_id:category_id,
        Sub_Category_name:Sub_Category_name,
        Sub_Category_description:Sub_Category_description,
        Sub_Category_logo:Sub_Category_logo,
        isActive:isActive
    });
    if(theSubCategory){
        return response.status(200).json({msg:"Updated successfully"})
    }
}

/*
    @usage : Delete category by Id
    @method : PUT
    @params : subcategoryId
    @url : http://localhost:8888/category/:subcategoryId
*/




