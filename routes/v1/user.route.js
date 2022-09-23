const express = require('express');
const { getAllUser, saveUser } = require('../../controller/users.controller');
const router = express.Router();


router.route('/')
.get(getAllUser)
.post(saveUser);


module.exports=router;