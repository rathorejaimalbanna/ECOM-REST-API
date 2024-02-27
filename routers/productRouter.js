import express from "express"; // Importing express framework
import db from "../mysql.js"; // Importing database module
import basicAuth from "../middleware/auth.js"; // Importing basic authentication middleware

export const productRouter = express.Router(); // Creating a router instance for product routes

// Route to fetch all products
productRouter.get('/', async (req, res) => {
    // Querying the database to fetch all products
    const data = await db.query("SELECT * from Products");
    
    // Sending response with product data
    res.send(data[0]);
});

// Route to search for a product by name
productRouter.get('/search/name', async (req, res) => {
    const name = req.query.name; // Extracting product name from query parameter
    
    // Querying the database to search for the product by name
    const product = await db.query(`SELECT * FROM products WHERE name = ${db.escape(name)}`);
    
    // Sending response with the searched product
    res.send(product[0]);
});

// Route to search for a product by category
productRouter.get('/search/category', async (req, res) => {
    const category = req.query.category; // Extracting product name from query parameter
    
    // Querying the database to search for the product by name
    const product = await db.query(`SELECT * FROM products WHERE category = ${db.escape(category)}`);
    
    // Sending response with the searched product
    res.send(product[0]);
});
