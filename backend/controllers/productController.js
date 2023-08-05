import asyncHandler from 'express-async-handler';
import {Product} from '../models/productModel.js';


// @desc fetch all products
// @route GET /api/products
// @access public
export const getProducts =  asyncHandler(async (req,res) => {

    const products = await Product.find({})
    res.json(products);
    
});



// @desc fetch all products
// @route GET /api/products/:id/
// @access public
export const getProductsById = asyncHandler(async (req,res) => {

  
    const product = await Product.findById(req.params.id);

    
    if(product){
        
        res.json(product);

    }else{

        res.status(404).json({message:'Product not found'})

    }

   
})

