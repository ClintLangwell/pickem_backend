const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Server Responding!');
});


app.listen(3000, ()=>{
    console.log('App Running on Port 3000');
})