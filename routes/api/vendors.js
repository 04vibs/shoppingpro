const Vendor=require('../../dbtest').Vendor

const route=require('express').Router()

route.get('/',(req,res)=>{
    //we want to send an array of all users
    //from our database here

    Vendor.findAll()
          .then((vendors)=>{
              res.status(200).send(vendors)

          }).catch((err)=>{
              res.status(500).send({
                  error:"Could not retrieve Vendors"
              })
          })      
})

route.post('/',(req,res)=>{
    //we expect the req to have name in it
    //we will create a new vendor
    console.log(req.body.name)
    Vendor.create({
        name:req.body.name
    }).then((vendor)=>{
        console.log("Inside vendor table addition   ")
        res.status(201).send(vendor)
    }).catch((err)=>{
        console.log('Inside err of vendor')
        res.status(501).send({
            
            error:"could not add"
        })
    })
})

exports=module.exports=route