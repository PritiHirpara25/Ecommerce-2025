import dotenv from 'dotenv';
import express, { Application , Request , Response} from 'express';
import mongoose from 'mongoose';
dotenv.config({path:'./.env'})

const port : string | number | undefined = process.env.PORT || 9999;
const DB_url : any = process.env.MONGO_DB_CLOUD_URL;
const DB_name : string | undefined = process.env.MONGO_DB_DATABASE;

const app : Application = express();
app.use(express.json())

// Category Router Configuration
import categoryRouter from './routes/CategoryRouter';
app.use('/category',categoryRouter);

// SubCategory Router Configuration
import subCategoryRouter from './routes/SubCategoryRouter';
app.use('/subcategory',subCategoryRouter)

// ProductCategory Router Configuration
import productRouter from './routes/ProductRouter';
app.use('/product',productRouter)

// User Router Confuguration
import userRouter from './routes/UserRouter';
app.use('/users',userRouter)

if(port){
    app.listen(Number(port) , () => {
        if(DB_url && DB_name){
            mongoose.connect(DB_url , {dbName : DB_name})
            .then(() => {
                console.log("Connection established")
            })
            .catch((err) => {
                console.log(err);
            })
        }
        console.log(`Express Server is Started at ${port}`)
    })
}