import express from "express";
import db from "./mysql.js";
import basicAuth from "./middleware/auth.js";

export const router = express.Router();


async function addData(v1, v2, v3) {
    await db.query(`INSERT INTO products(id, name, image) VALUES (${db.escape(v1)}, ${db.escape(v2)}, ${db.escape(v3)})`);
    fetchTable()
};

router.get('/',async (req,res)=>{
    const data = await db.query("SELECT * from Products");

    res.send(data[0])
})

router.get('/add', (req,res)=>{
    const name =  req.query.name;
    res.send(name)
});


router.get('/search',async (req,res)=>{
    const name =  req.query.name;
    const product = await db.query(`SELECT * FROM products WHERE name = ${db.escape(name)}`)
    res.send(product[0])
})


router.get('/signin',basicAuth)