require('dotenv').config();
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const userRouter = require('./routes/v1/user.route');
const {  connectToServer } = require('./utils/databaseConnection');
const app = express();
app.use(express.json());
const port = process.env.port || 4000;

connectToServer((err)=>{
if(!err){
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
      })
}
else{
    console.log(err);
}
})

app.use('/users',userRouter)

app.all('*',(req,res)=>{
    res.send('No route found')
})



// global error handler

app.use(errorHandler);

