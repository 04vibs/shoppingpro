const route=require('express').Router()


route.use('/vendors',require('./vendors'))
route.use('/products',require('./products'))
route.use('/carts',require('./carts'))

exports=module.exports={
    route
}