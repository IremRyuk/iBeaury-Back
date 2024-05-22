const CreateUser = require('../Schema/userData')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

// JsonWebToken
const createToken = (id) => {
    return jwt.sign({_id:id},process.env.SECRET,{expiresIn:'2d'})
}


// Get ALL Users
const AllUsers = async (req,res) => {
    const allDataUsers = await CreateUser.find().sort({updatedAt:-1})
    res.status(200).json({allData:allDataUsers})
}

// Login Control
const logIn = async (req,res) => {
    const {gmail,password} = req.body
    try{
        const IsLoginOk = await CreateUser.login(gmail,password)
        // if IsLoginOk Valid
        const token  = createToken(IsLoginOk._id)
        res.status(200).json({gmail,token})
    }catch(err){
        res.status(400).json({LoginErrMsg:err.message})
    }
    

}
// Sign Up Control
const signUp = async (req,res) => {
    const {gmail,password} = req.body
    try{
const CreateUsers = await CreateUser.SignUp(gmail,password)

// Create Token
const token = createToken(CreateUsers._id)

res.status(200).json({gmail,token})
    }catch(err){
        res.status(400).json({signUpErr:err.message})
    }   
}


// Find Single User
const FindUser = async (req,res) => {
    const {id} = req.params
    const foundUser = await CreateUser.findById(id)
    res.status(200).json(foundUser)
}

// Delete Single User
const DeleteUser = async (req,res) => {
    const {id} = req.params
    const deletedUser = await CreateUser.findByIdAndDelete(id)
    res.status(200).json(deletedUser)
}



module.exports = {logIn,signUp,AllUsers,FindUser,DeleteUser}