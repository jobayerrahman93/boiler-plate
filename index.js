const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const userRouter = require('./routes/v1/user.route');
const app = express();
const port = process.env.port || 4000;

app.use('/users',userRouter)


app.all('*',(req,res)=>{
    res.send('No route found')
})



// global error handler

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})