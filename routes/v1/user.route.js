const express = require('express');
const { getAllUser, saveUser, getSingleUser } = require('../../controller/users.controller');
const router = express.Router();


router.route('/')
.get(getAllUser)
.post(saveUser);

router
.route('/:id')
.get(getSingleUser)



module.exports=router;