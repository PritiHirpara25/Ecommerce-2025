import { Request, Response } from 'express';
import { EcomCategory } from '../models/EcomCategory';
import CategoryTable from '../database/CategorySchema';
import mongoose from 'mongoose';

/*
    @usage : craete a category
    @method : POST
    @params : category_name , category_description , category_logo , isActive
    @url : http://localhost:8888/category
*/
export const createCategory = async (request: Request, response: Response) => {
    let { category_name, category_description, category_logo , isActive } = request.body;
    let theCategory: EcomCategory | null | undefined = await new CategoryTable({
        category_name: category_name,
        category_description: category_description,
        category_logo: category_logo,
        isActive:isActive
    }).save();
    if (theCategory) {
        return response.status(200).json({
            data: theCategory,
            msg: "Created Successfully"
        })
    }
}

/*
    @usage : get a category by Id
    @method : GET
    @params : categoryId
    @url : http://localhost:8888/category:categoryId
*/
export const getCategoryById = async (request: Request, response: Response) => {
    let { categoryId } = request.params;
    const mongoCategoryId = new mongoose.Types.ObjectId(categoryId);
    const theCategory: EcomCategory | null | undefined = await CategoryTable.findById(mongoCategoryId);
    if (theCategory) {
        return response.status(200).json(theCategory)
    }
    else {
        return response.status(404).json({
            data: null,
            msg: "No Category Found"
        })
    }
}

/*
    @usage : get All category
    @method : GET
    @params : no-params
    @url : http://localhost:8888/category
*/
export const getAllCategory = async (request: Request, response: Response) => {
    try {
        let theCategory: EcomCategory[]  | undefined = await CategoryTable.find();
        if(theCategory){
            return response.status(200).json(theCategory)
        }
    }
    catch(err){
        return response.status(404).json({msg:"not Found any Category"})
    }
}


/*
    @usage : Update category by Id
    @method : PUT
    @params : category_name , category_description , category_logo , isActive
    @url : http://localhost:8888/category/:categoryId
*/
export const updateCategoryById = async (request:Request , response:Response) => {
    let {category_name, category_description, category_logo , isActive} = request.body;
    let {categoryId} = request.params;
    const mongoCategoryId = new mongoose.Types.ObjectId(categoryId);
    const theCategory : EcomCategory | undefined | null = await CategoryTable.findByIdAndUpdate(mongoCategoryId , {
        category_name:category_name,
        category_description:category_description,
        category_logo:category_logo,
        isActive:isActive
    }) 
    if(theCategory){
        return response.status(200).json({
            msg:"Category updated successfully"
        })
    }
}

/*
    @usage : Delete category by Id
    @method : DELETE
    @params : categoryId
    @url : http://localhost:8888/category/:categoryId
*/
