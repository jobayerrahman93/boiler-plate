const express = require('express');
const { getAllUser, saveUser, getSingleUser, updateUser, deleteUser } = require('../../controller/users.controller');
const router = express.Router();


router.route('/')
.get(getAllUser)
.post(saveUser);

router
.route('/:id')
.get(getSingleUser)
.patch(updateUser)
.delete(deleteUser)



module.exports=router;