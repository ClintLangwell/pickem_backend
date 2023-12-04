const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/teams', require('./routes/teamsRouter'));
app.use(errorHandler);

app.listen(port, ()=>{
  console.log(`api running on port ${port}`);
});