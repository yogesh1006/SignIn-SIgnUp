const express=require ("express")
const app=express();

const {createUser,signin} =require("../controllers/user");


app.post('/signup',createUser);



app.post('/signin',signin);

// app.get('/profile/:id',(req,res)=>{
//     res.send("You are requested to see the profile whose id " + req.params.id);
// })




module.exports=app;