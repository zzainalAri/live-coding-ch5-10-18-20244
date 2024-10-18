const {Products} = require("../models")

const createProduct = async (req,res) => {
    const{name, stock, price} = req.body;

    try {
        const newProduct = await Products.create({
            name,
            stock,
            price
        })

        res.status(201).json({
            status:"Success",
            message : "Success create new product",
            isSuccess : true, 
            data: {
                newProduct
            }
        })
    } catch (error) {
        console.log(error.name)
        if (error.name === "SequelizeValidationError"){
            const errorMessage = error.errors.map(err => err.message)
            return res.status(400).json({
                status :"Fail",
                message : errorMessage[0],
                isSuccess : false, 
                data: null
            })
        }

        res.status(500).json({
            status :"Fail",
            message : error.message,
            isSuccess : false, 
            data: null
        })
    }
}

module.exports ={createProduct}