import { Router , Response , Request } from "express";
import * as CategoryController from '../controller/CategoryController'

const categoryRouter : Router = Router();

/*
    @usage : craete a category
    @method : POST
    @params : category_name , category_description , category_logo
    @url : http://localhost:8888/category
*/
categoryRouter.post("/", async (request:Request , response:Response) => {
    await CategoryController.createCategory(request , response)
})

/*
    @usage : get a category by Id
    @method : GET
    @params : categoryId
    @url : http://localhost:8888/category:categoryId
*/
categoryRouter.get('/:categoryId' , async (request:Request , response:Response) => {
    await CategoryController.getCategoryById(request , response);
})

/*
    @usage : get All category
    @method : GET
    @params : no-params
    @url : http://localhost:8888/category
*/
categoryRouter.get('/', async(request:Request , response:Response) => {
    await CategoryController.getAllCategory(request , response);
})

/*
    @usage : Update category by Id
    @method : PUT
    @params : categoryId
    @url : http://localhost:8888/category/:categoryId
*/
categoryRouter.put('/:categoryId' , async(request:Request , response:Response) => {
    await CategoryController.updateCategoryById(request , response)
})

/*
    @usage : Delete category by Id
    @method : PUT
    @params : categoryId
    @url : http://localhost:8888/category/deletecategory/:categoryId
*/
categoryRouter.put('/deletecategory/:categoryId',async(request:Request,response:Response) => {
    await CategoryController.deleteCategoryById(request , response)
})

export default categoryRouter