import { Router , Request , Response } from "express";
import * as ProductController from '../controller/ProductController'

const productRouter:Router = Router();

/*
    @usage : craete a Product
    @method : POST
    @params : no-params
    @url : http://localhost:8888/product
*/
productRouter.post('/',async(request:Request , response:Response) => {
    await ProductController.createProduct(request , response);
})


/*
    @usage : get a product by Id
    @method : GET
    @params : productId
    @url : http://localhost:8888/product/:productId
*/
productRouter.get('/:productId' , async(request:Request , response:Response) => {
    await ProductController.getProductById(request , response)
})


/*
    @usage : get all product
    @method : GET
    @params : no-params
    @url : http://localhost:8888/product
*/
productRouter.get('/',async(request:Request , response:Response) => {
    await ProductController.getAllProductById(request , response);
})


/*
    @usage : Update Product by Id
    @method : PUT
    @params : productId
    @url : http://localhost:8888/product/:productId
*/
productRouter.put('/:productId',async(request:Request,response:Response) => {
    await ProductController.updateProductById(request , response);
})

/*
    @usage : Update Product Status By Id
    @method : PUT
    @params : productId
    @url : http://localhost:8888/product/deleteproduct/:productId
*/
productRouter.put('/deleteproduct/:productId',async(request:Request, response:Response) => {
    await ProductController.updateProducStatustById(request,response);
})

export default productRouter