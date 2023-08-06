
import jwt  from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv'
dotenv.config({ path : "./backend/.env"} );


import { User } from '../models/userModel.js'


export const protect = asyncHandler(async (req, res, next) => {

    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

        try{

            token = req.headers.authorization.split(' ')[1];
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select("_id name email");
            console.log(req.user);
            next();

        }catch (error){

            console.log(error);
            throw new Error('Not authorized, token failed');
        }

    }else{

        throw new Error('No token found')
    }

});


