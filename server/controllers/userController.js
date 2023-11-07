import User from "../model/user.js"



export const addUser=async(req,res)=>{
    try{
     const user =await User.findOne({sub:req.body.sub});
    //  if(!user){
    //     const newUser=await User.create(req.body);
    //     const saveUser=await newUser.save();
    //     res.status(200).json(newUser);
    //  }
    //  res.status(200).json({msg:'user already exist'})
    if(user)
    {
        res.status(200).json({msg:'user already exist'}) ;
        return;
    }
    const newUser=new User(req.body);
    await newUser.save();
   return res.status(500).json(newUser)   
}
    catch(err){
      res.status(500).json(err.message)
    }
}