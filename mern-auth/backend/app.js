const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cookieParser= require("cookie-parser")
const cors = require("cors");
const app=express();


mongoose.connect('mongodb://localhost:27017/mern-auth',
 {useNewUrlParser: true, 
useUnifiedTopology: true})
.then(console.log("DB Connected"))
.catch(err=>console.log(err));

//myroutes
const userRoutes=require ("./routes/user");




//middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//use rutes
app.use(userRoutes);





const port=8282;

app.listen(port,()=>{
    console.log(`App listening at ${port}`);
})