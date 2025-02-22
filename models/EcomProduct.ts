export interface EcomProduct{
    Sub_Category_id : string , 
    Product_name:string;
    Product_description:string,
    Product_image:string,
    Product_images:string[],
    Product_price:string,
    Product_brand:string,
    Product_quantity:number,
    isActive:boolean
}