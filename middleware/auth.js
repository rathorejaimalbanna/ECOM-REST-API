import pkg from "jsonwebtoken";
import db from "../mysql.js";
const jwt = pkg;

const basicAuth = async (req,res,next)=>{
    var authHeader = req.headers['authorization']
    // check if authrization header is provided
    if(!authHeader)
    {
       return res.status(401).send('No authorization details found')
    }
    // if autherization header is there, it will be there in form of base64 fromat [Basic, sq5rwref3ewrfef]
    const base64Credentials = authHeader.replace('Basic','');

    //convert from base 64 format to utf8

    const decodedCreds = Buffer.from(base64Credentials,'base64').toString('utf8');

    // buffer is in form of [username:password]
    const creds = decodedCreds.split(':');
    var [email,password] = creds;
    const result =await db.query(`SELECT * FROM users WHERE username = ${db.escape(email)} AND password = ${db.escape(password)}`);
    console.log(result)
    if(result)
    {   //we can create token here when authentication is complete
        const token  = jwt.sign({
            email:email,
            userId:'Rathore_jai'
        },
        'ABClkajf454jh5jjjkj43jklda',
        {expiresIn:'1h'} );
        return res.status(200).send(token);
        next()}
    else{
       return res.status(401).send('Invalid Credentials')
    }

};

export default basicAuth;