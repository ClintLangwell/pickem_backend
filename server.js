const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DB = require('./data/database_connect');
const TEAM = require('./models/teamModel');
const { MongoNetworkTimeoutError } = require('mongodb');

app.use(express.json());

mongoose.connect(DB).then(()=>{
  console.log('DB connected')
  app.listen(3000, ()=>{
    console.log('Server Running on Port 3000');
  });
}).catch((err)=>{
  console.log(err);
});


app.get('/teams', async(req, res)=>{
    try {
      const TEAMS = await TEAM.find({});
      res.status(200).json(TEAMS);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

app.get('/teams:teamNumber', async(req, res)=>{
  try {
    const teamNumber = req.params;
    const TEAMNUMBER = await TEAM.findById({teamNumber});
    res.status(200).json(TEAMNUMBER);
  } catch (err) {
      res.status(500).json({message: err.message})
  }
});

app.post('/teams', async(req, res)=>{
  try {

    const team = await TEAM.create(req.body);
    res.status(200).json(team);
  } catch (err) {
    console.log(err.message);
    res.send(500).json({message: err.message});
  }  
  
});

app.put('/teams:id', async(req, res)=>{
  try {
    const id = req.params;
    const team = await TEAM.findByIdAndUpdate(id, req.body);
    if(!team){
      return res.status(404).json({message: `Team does not exist with ID ${id}`});
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({message: err.message});  
  }
})