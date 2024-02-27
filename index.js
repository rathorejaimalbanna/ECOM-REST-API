import express from "express"
import userRouter from "./routers/userRouter.js";
import cartRouter from "./routers/cartRouter.js";
import { productRouter } from "./routers/productRouter.js";

const app = express()
app.use(express.json())
app.use('/products',productRouter)
app.use('/users',userRouter)
app.use('/cart',cartRouter)




app.listen(3200,()=>
console.log("server is live"))