import express from 'express';
import db from '../mysql.js';
import basicAuth from '../middleware/auth.js';
import jwtAuth from '../middleware/jwt.js';

const cartRouter = express.Router();
async function getCartProducts(req,res)
{
    const username = req.userEmail
    const data = await db.query(`SELECT * FROM cart WHERE  username = ${db.escape(username)}`);
    if(data)
    {res.send(data[0])}
    else{res.send("NO PRODUCTS IN YOUR CART")};
};

async function addProduct(req,res)
{
    const product = req.query.name;
   const item = await db.query(`SELECT * FROM products where name = ${db.escape(product)}`)
   const productPrice = item[0][0].price
    const username = req.userEmail;
    await db.query(`INSERT INTO cart VALUES(${db.escape(username)},${db.escape(product)},${db.escape(productPrice)})`);
    res.send('product added successfully')
}


cartRouter.get("/allProducts",jwtAuth,getCartProducts);

cartRouter.post('/addProduct',jwtAuth,addProduct);

export default cartRouter;