import basicAuth from '../middleware/auth.js'; // Importing basic authentication middleware
import express from 'express'; // Importing express framework
import db from '../mysql.js'; // Importing database module

const userRouter = express.Router(); // Creating a router instance for user routes

// Function to add a new user
async function addUser(req, res) {
    var email = req.body.username; // Extracting email from request body
    var name = req.body.name; // Extracting name from request body
    var pass = req.body.pass; // Extracting password from request body
    console.log(pass);
    
    // Inserting user data into the database
    await db.query(`INSERT INTO users VALUES(${db.escape(name)},${db.escape(email)},${db.escape(pass)})`);
    
    // Sending success response
    res.status(201).send("User added successfully");
}

// Route to handle user signup
userRouter.post('/signup', addUser);

// Route to handle user signin with basic authentication
userRouter.post('/signin', basicAuth);

export default userRouter; // Exporting the user router
