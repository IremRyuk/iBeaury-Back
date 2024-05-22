require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
// const passport = require('passport')
// const cookieSession = require('cookie-session')
// const passportSertup = require('./passport')
// const authGoogle = require('./Routes/authGoogle')

// Data Exchange

app.use(express.json())
app.use(cors())



// // Google Auth
// app.use(cookieSession({
//     name:'session',
//     keys:['cyberwolve'],
//     maxAge:24*60*60*100
// }))
// app.use(passport.initialize())
// app.use(passport.session())
// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:"GET,POST,PUT,DELETE",
//     credentials:true
// }))

// app.use('/auth',authGoogle)



// DataBase
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`App is running`)
    })    
}).catch(err=>console.log('Mognodb',err))


const ItemsData = require('./Routes/dataItems')
const UserData = require('./Routes/dataUsers')
app.use('/data',ItemsData)
app.use('/user',UserData)