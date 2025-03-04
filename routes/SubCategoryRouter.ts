import { Router, Request, Response } from "express";
import * as SubCategoryController from '../controller/SubCategoryController'

const subCategoryRouter: Router = Router();

/*
    @usage : craete a Subcategory
    @method : POST
    @params : category_id , name , description , logo , isActive
    @url : http://localhost:8888/subcategory
*/
subCategoryRouter.post('/', async (request: Request, response: Response) => {
    await SubCategoryController.createSubCategory(request, response)
})


/*
    @usage : get subCategory by Id
    @method : GET
    @params : subcategoryId
    @url : http://localhost:8888/subcategory/:subcategoryId
*/
subCategoryRouter.get('/:subcategoryId', async (request: Request, response: Response) => {
    await SubCategoryController.getSubCategoryById(request, response)
})


/*
    @usage : get All SubCategory
    @method : GET
    @params : no-params
    @url : http://localhost:8888/subcategory
    */
subCategoryRouter.get('/', async (request: Request, response: Response) => {
    await SubCategoryController.getAllSubCategory(request, response)
})

/*
    @usage : update SubCategory by Id
    @method : PUT
    @params : category_id , name , description , logo , isActive
    @url : http://localhost:8888/subcategory/:subcategoryId
*/

subCategoryRouter.put('/:subcategoryId', async (request: Request, response: Response) => {
    await SubCategoryController.updateSubCategoryById(request, response)
})

/*
    @usage : Update category Status by Id
    @method : PUT
    @params : subcategoryId
    @url : http://localhost:8888/subcategory/deletesubcategory/:subcategoryId
*/
subCategoryRouter.put('/deletesubcategory/:subcategoryId', async (request: Request, response: Response) => {
    await SubCategoryController.updateSubCategoryStatusById(request, response)
})


export default subCategoryRouter