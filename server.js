const express=require('express');
const path=require('path');
const app=express();


app.use(express.json())
app.use(express.urlencoded({
    extended:true

}))

app.use('/',express.static(path.join(__dirname+'/public')))

app.use('/api',require('./routes/api').route)




app.listen(5151, function () {
    console.log("server started on http://localhost:5151");
});