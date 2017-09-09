console.log('Site Controller Load');
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

router.get('/getTopics', (req, res) => {
  const mongoConnection = 'mongodb://localhost:27017/progressTracker';

  MongoClient.connect(mongoConnection, (err, db) => {
    const cursor = db.collection('topics').find({});
    cursor.toArray((error, topics) => {
      db.close();
      res.json(topics);
    });
  });
});

router.get('/',function(req,res){
  res.render('/');
});
router.get('/addTopic',function(req,res){
  res.render('/addTopic');
});

router.get('/editTopic',function(req,res){
  res.render('/editTopic');
});

module.exports=router;