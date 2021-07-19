const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://192.168.1.103:27017/IncomeApp'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const userRouter = require('./routes/user')
app.use('/user',userRouter)

const incomeRouter = require('./routes/income')
app.use('/income',incomeRouter)

const expenseRouter = require('./routes/expense')
app.use('/expense',expenseRouter)

app.listen(3000 ,()=>{
    console.log(`Server run.... `)
})