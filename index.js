const express = require('express');
const app = express();

const cors = require('cors')
const dotenv = require('dotenv');
const {connect} = require('./config/mongodb');
const product = require('./routes/product');
dotenv.config();
const port = process.env.PORT || 4000
connect();
app.use(express.json());
app.use(cors());


app.use("/api/v1", product)

app.get('/', (req, res)=>{
    return res.status(200).json({
        success: true,
        message: "Your server is running at ... "
    })
})

app.listen(port, ()=>{
    console.log(`Server running at ${port}`)
})

module.exports = app;