import express from 'express'; // Importing express framework
import db from '../mysql.js'; // Importing database module
import jwtAuth from '../middleware/jwt.js'; // Importing JWT authentication middleware

const cartRouter = express.Router(); // Creating a router instance for cart routes

// Function to get products in the cart
async function getCartProducts(req, res) {
    const username = req.userEmail; // Extracting user email from authenticated token
    
    // Querying the database to fetch products in the cart for the user
    const data = await db.query(`SELECT * FROM cart WHERE  username = ${db.escape(username)}`);
    
    // Sending response with cart products
    if (data) {
        res.send(data[0]);
    } else {
        res.send("NO PRODUCTS IN YOUR CART");
    }
};

// Function to add a product to the cart
async function addProduct(req, res) {
    const product = req.query.name; // Extracting product name from query parameter
    
    // Querying the database to get details of the product
    const item = await db.query(`SELECT * FROM products where name = ${db.escape(product)}`);
    const productPrice = item[0][0].price; // Extracting product price from the database
    
    const username = req.userEmail; // Extracting user email from authenticated token
    
    // Inserting the product into the cart
    await db.query(`INSERT INTO cart VALUES(${db.escape(username)},${db.escape(product)},${db.escape(productPrice)})`);
    
    // Sending success response
    res.send('product added successfully');
}

// Route to get all products in the cart after jwt authentication 
cartRouter.get("/allProducts", jwtAuth, getCartProducts);

// Route to add a product to the cart after jwt authentication
cartRouter.post('/addProduct', jwtAuth, addProduct);

export default cartRouter; // Exporting the cart router
