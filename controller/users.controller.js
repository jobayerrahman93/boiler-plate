const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/databaseConnection")


const getAllUser=async(req,res,next)=>{
   try {
      
    const db= getDb();
    const users = await db.collection('users').find().toArray();
    res.status(200).json({success:true, data:users});
    
   } catch (err) {
    next(err)

   }
}

const getSingleUser=async(req,res,next)=>{
   try {

    const {id} = req.params;
    if(!ObjectId.isValid(id)){
    return res.status(400).json({success:false,message:'invalid id'});
    }
    const db= getDb();
    const singleUser = await db.collection('users').findOne({_id: ObjectId(id)});
    if(!singleUser){
    return res.status(400).json({success:false,message:'could not find a user with this id'});
    }
    res.status(200).json({success:true,data:singleUser});
    
   } catch (err) {
    next(err)

   }
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

    res.status(200).json({success:true, message:'successfully data saved'});
    
   } catch (err) {
    next(err)
   }
    
}


const updateUser=async(req,res,next)=>{
    try {
 
     const {id} = req.params;
     if(!ObjectId.isValid(id)){
     return res.status(400).json({success:false,message:'invalid user id'});
     }
     const db= getDb();
     const singleUser = await db.collection('users').updateOne({_id: ObjectId(id)},{$set: req.body});
     if(!singleUser.modifiedCount){
        return res.status(400).json({success:false, message:'Already updated this user'});
     }
     res.status(200).json({success:true,message:'User updated successfully'});
     
    } catch (err) {
     next(err)
 
    }
 }
const deleteUser=async(req,res,next)=>{
    try {
 
     const {id} = req.params;
     if(!ObjectId.isValid(id)){
     return res.status(400).json({success:false,message:'invalid user id'});
     }
     const db= getDb();
     const deleteUser = await db.collection('users').deleteOne({_id: ObjectId(id)});
     if(!deleteUser.deletedCount){
        return res.status(400).json({success:false, message:'Already deleted this user'});
     }
     res.status(200).json({success:true,message:'User deleted successfully'});
     
    } catch (err) {
     next(err)
 
    }
 }

module.exports={
    getAllUser,
    getSingleUser,
    saveUser,
    updateUser,
    deleteUser
}