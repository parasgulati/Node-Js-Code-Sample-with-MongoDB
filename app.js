const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const API = express();
var CRUD = require("./routes/CRUD.js");

require('dotenv/config');


API.use(cors());
API.use(bodyParser.json());
API.use(bodyParser.urlencoded({extended:false}));

function Authenticate(req,res,next)
{
    if(process.env.API_KEY==req.body.API_KEY)
    {
        next();
    }
    else
    {
        res.json({
            status:401,
            message:"Unauthorized"
        }).send();
    }
}

API.use('/crud',Authenticate,CRUD);

const port = 3000;
API.listen(port);
