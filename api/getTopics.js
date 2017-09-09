const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/addTopic',function(req,res){
  res.render('/addTopic');
});

module.exports=router;