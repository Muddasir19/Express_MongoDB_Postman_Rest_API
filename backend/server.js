const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')

const connectDB = require('./config/db')

connectDB()

const { errorHandler } = require('./middleware/errorMiddleware')
// const port = 5000

const port = process.env.PORT || 5000 

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false}))

// app.get('/api/goals' , (req, res) => {
//     // res.send('Get Goals')
//     res.status(200).json({message:"Get Goals"})
// } )

app.use('/api/goals', require("./routes/goalRoutes"))
app.use('/api/users', require("./routes/userRoutes"))

app.use(errorHandler)

app.listen ( port, () => console.log(`Server started on port ${port}`) )