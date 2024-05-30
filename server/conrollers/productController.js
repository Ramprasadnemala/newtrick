const Product = require('../models/Product');

const createProduct= async(req, res)=>{
    try{
        const {name,userNo,earn,expense,date,work}= req.body

        const product = new Product({
            name,
            userNo,
            earn,
            expense,
            date,
            work
        })

        await product.save()
        res.status(201).json(product)
    }catch (error){
        console.log("there is an error",error)
    }
}

const getProducts=async(req,res)=>{
    try{
        const products =await Product.find()
        res.status(200).json(products)
    } catch(error){
        console.log("There is an error:",error)
        res.status(500).json({message:"server error"})
    }
}

module.exports ={createProduct, getProducts }