const Sequelize=require('sequelize')
const db=new Sequelize('shopdb','shopper','shoppass',{

    dialect:'mysql',
    host:'localhost',


})

const Vendor=db.define('vendor',{
  
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    }
    
})

const Product=db.define('products',{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true

    },
    productname:{
        type:Sequelize.STRING,
        allowNull:false

    },

    manufacturer:Sequelize.STRING,

    price:{
        type:Sequelize.FLOAT,
        allowNull:false,
        defaultValue:0.0
    }
})
Product.belongsTo(Vendor)
Vendor.hasMany(Product)

const Cart=db.define('carts',{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true

    },
      
    quantity:{
        type:Sequelize.FLOAT,
        allowNull:false,
        defaultValue:1
    },
    
    ProductId:{
        type:Sequelize.INTEGER,
        references:{
            model:Product,
            key:'id'
        },
        unique:'user_product'
    }
})
// Product.belongsTo(Cart)
// Cart.hasMany(Product)

exports=module.exports={
Vendor,Product,Cart

}

db.sync()
        .then(()=>console.log('Database has been syhnced'))
        .catch((err)=>console.log(err));