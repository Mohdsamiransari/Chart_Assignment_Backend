const Product = require('../models/product');

// create product
exports.getProduct = async (req, res)=>{
    const data = await Product.find({});
    res.status(200).json({
        success: true,
        message: "Connect to routes",
        data: data
    })
}