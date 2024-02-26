import express from "express"
import { router } from "./routes.js"
import userRouter from "./routers/userRouter.js"

const app = express()
app.use(express.json())
app.use('/products',router)
app.use('/users',userRouter)


app.listen(3200,()=>
console.log("server is live"))