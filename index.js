const express = require('express');
const router = require('./routes/v1/user.route');
const app = express();
const port = process.env.port || 4000;

app.use('/users',router)


app.all('*',(req,res)=>{
    res.send('No route found')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})