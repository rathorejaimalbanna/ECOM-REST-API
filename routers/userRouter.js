
import basicAuth from '../middleware/auth.js';
import express from 'express';
import db from '../mysql.js';

const userRouter = express.Router();
async function addUser(req,res)
{
    var email = req.body.username;
    var name = req.body.name;
    var pass = req.body.pass;
    console.log(pass)
    await db.query(`INSERT INTO users VALUES(${db.escape(name)},${db.escape(email)},${db.escape(pass)})`);
    res.status(201).send("User added successfully")
}

userRouter.post('/signup',addUser);
userRouter.post('/signin',basicAuth);


export default userRouter;