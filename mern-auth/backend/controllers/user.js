const User=require ("../models/user");

exports.createUser=(req,res)=>{
   const user= new User(req.body)
   user.save((err,user)=>{
       if(err){
           res.status(400).json({
               err:"NOT ABle to save user in DB"
           })
        
       }

       res.json({
           name: user.name,
           email:user.email,
           password:user.password
       })
   })
}

exports.signin=(req,res)=>{
    const {email}=req.body;
    User.findOne({email},(err,user)=>{
        if(err || !user){
            return res.status(400).json({
                error:"EMAIL OR PASSWORD IS NOT CORRECT"
            })
        }
        // if(user.name===req.body.email && user.password===req.body.password){
            const {_id,email,password}=user;
          return res.json({
                user:{
                  _id,email,password
                }
            })
        // }
           
        
    })
}