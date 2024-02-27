import express from "express";
import db from "../mysql.js";
import basicAuth from "../middleware/auth.js";

export const productRouter = express.Router();



productRouter.get('/',async (req,res)=>{
    const data = await db.query("SELECT * from Products");
    res.send(data[0])
});


productRouter.get('/search',async (req,res)=>{
    const name =  req.query.name;
    const product = await db.query(`SELECT * FROM products WHERE name = ${db.escape(name)}`)
    res.send(product[0])
})


