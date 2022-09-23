const { getDb } = require("../utils/databaseConnection")

const getAllUser=(req,res)=>{
    res.send('this is user route')
}

const saveUser=async(req,res,next)=>{
    
    try {
    const db= getDb();
    const user = req.body;
    console.log(user);
    const result = await db.collection("users").insertOne(user);

    if(!result.insertedId){
        res.status(400).send({status:false,error:'something went wrong'})
    }

    res.send(`user added with ${result.insertedId}`);
    
   } catch (err) {
    next(err)
   }

    
}

module.exports={
    getAllUser,
    saveUser
}