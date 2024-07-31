import app from "./app.js";
import sequelize from "./config/connection.js";

const port = process.env.PORT;

const main = async () =>{
  try{
    await sequelize.sync();
    console.log('Database Connected...')
    app.listen(port, ()=>{
      console.log(`Server on ${port}`)
      console.log(`http://localhost:${port}`)
    });
  }
  catch (error){
    console.log('Database no connected', error)
  }
}

main();

// import express from "express";

// const app = express()
// const port = 3000;

// app.use('/', (req, res)=>{
//   res.send('express')
// })

// app.listen(port, ()=>{
//   console.log(`Server on ${port}`)
//   console.log(`http://localhost:${port}`)
// })