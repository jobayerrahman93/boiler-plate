const express = require('express');
const { getAllUser } = require('../../controller/users.controller');
const router = express.Router();


router.get('/',getAllUser);


module.exports=router;