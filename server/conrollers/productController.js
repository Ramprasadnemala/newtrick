const Product = require('../models/Product');

// Create a new product
const createProduct = async (req, res) => {
    try {
        const { name, userNo, earn, expense, date, work } = req.body;

        const product = new Product({
            name,
            userNo,
            earn,
            expense,
            date,
            work
        });

        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.log("There is an error", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Get all products with a 60-second delay
const getProducts = async (req, res) => {
    try {
        // Delay for 60 seconds (60000 milliseconds)
        await new Promise(resolve => setTimeout(resolve, 60000));

        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.log("There is an error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { createProduct, getProducts };
