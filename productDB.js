const {connect} = require('./config/mongodb');
const Product = require('./models/product')
require('dotenv').config();

const packageJSON = require('./jsondata.json')

const start = async ()=>{
    try {
        await connect(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(packageJSON);
        console.log("success")
    } catch (error) {
        console.log(error)
        
    }
}

start()