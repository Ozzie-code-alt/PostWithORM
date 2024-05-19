require('dotenv').config({path: `${process.cwd()}/.env`})
const express = require('express')
const authRouter = require('./routes/authRoute')

const app = express()


app.get('/test', (req, res) => {

    res.send('Hello World!').status(200)
})


// all routes will be here

app.use('/api/v1/auth', authRouter)
app.use('*',(req, res, next)=>{
    res.status(404).json({
        status: 'fail',
        message: 'Resource not found'
    })
})
const PORT = process.env.APP_PORT || 4000

app.listen(PORT, () => {
    console.log('Server is running on port 3000')
})