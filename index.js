// Importing necessary modules
import express from "express";
import userRouter from "./routers/userRouter.js"; // Importing user router
import cartRouter from "./routers/cartRouter.js"; // Importing cart router
import { productRouter } from "./routers/productRouter.js"; // Importing product router

const app = express(); // Creating Express application
app.use(express.json()); // Middleware to parse JSON bodies

// Routing configuration
app.use('/products', productRouter); // Mounting product router on '/products' route
app.use('/users', userRouter); // Mounting user router on '/users' route
app.use('/cart', cartRouter); // Mounting cart router on '/cart' route

// Starting the server
app.listen(3200, () => console.log("Server is live")); // Server listens on port 3200 and logs a message when it starts
