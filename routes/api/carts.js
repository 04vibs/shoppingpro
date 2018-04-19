const Cart=require('../../dbtest').Cart
const route=require('express').Router();

route.get('/',(req,res)=>{
    //get cart

    Cart.findAll()
            .then((carts)=>{
                res.status(200).send(carts)
            })
            .catch((err)=>{
                error:"could not retrieve carts"
            })
})

 route.post('/add/id:',(req,res)=>{
        
     //Add a new product

    
     Cart.create({
         id:req.body.product.id,
         quantity:req.body.quantity
       
     }).then((cart)=>{
        
         res.status(201).send(cart)
     }).catch((error)=>{
         res.status(501).send({
             error:"Error while adding in cart"
         })
     })
 })

route.post('./inc/id:',(req,res)=>{
    Cart.findOne({
        where: {
            id:req.body.id
        }
        
    }).then((product)=>{
        Cart.update(
           {quantity:product.quantity+1},{
               where:{
                  id:req.params.id
               }
           }

        ).then((id)=>{
            res.status(201).send(quantity)
        })
    })
    
})

route.post('./dec/id:',(req,res)=>{
    Cart.findOne({
        where: {
            id:req.body.id
        }
        
    }).then((product)=>{
        if(product.quantity==0)
        {
            return res.status(201).send("quantity can't be zero")
        }
        Cart.update(
           {
               quantity:product.quantity-1
            
            },{
               where:{
                  id:req.params.id
               }
           }

        ).then((id)=>{
            res.status(201).send(quantity)
        })
    })
    
})



exports=module.exports=route