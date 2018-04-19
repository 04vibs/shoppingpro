const Product=require('../../dbtest').Product
const route=require('express').Router();

route.get('/',(req,res)=>{
    //get all products

    Product.findAll()
            .then((products)=>{
                res.status(200).send(products)
            })
            .catch((err)=>{
                error:"could not retrieve products"
            })
})

route.post('/',(req,res)=>{
    //validate the values
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error:"Price is not valid number"
        })
    }
    
    //Add a new product

    Product.create({
        
        productname:req.body.productname,
        manufacturer:req.body.manufacturer,
        price: parseFloat(req.body.price)
    }).then((product)=>{
        console.log(req.body.productname)
        console.log(req.body.manufacturer)
        console.log(req.body.price)
        res.status(201).send(product)
    }).catch((error)=>{
        res.status(501).send({
            error:"Error adding product"
        })
    })
})

exports=module.exports=route