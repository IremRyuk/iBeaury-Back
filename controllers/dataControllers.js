const mongoose = require('mongoose')
const CreateItem = require('../Schema/ItemsCreate')

// Get All Data
const getAllData = async (req,res) => {
const allData = await CreateItem.find().sort({createdAt:-1})
res.status(200).json(allData)
}

// Get Limited Data
const LimitData = async(req,res) => {
    const limData = await CreateItem.find().sort({createdAt:-1}).limit(-3)
    res.status(200).json(limData)
}


// Get Single Data
const singleData = async(req,res) => {
const {id} = req.params
const SingleData = await CreateItem.findById(id)
res.status(200).json(SingleData)
}

// Create New Data
const NewData = async(req,res) => {
    const {image,nameSp,nameEN,titleSp,titleEN,descrSp,descrEN,category,price} = req.body
    try{
        const UpdateNewData = await CreateItem.create({image,nameSp,nameEN,titleSp,titleEN,descrSp,descrEN,category,price})
        res.status(200).json(UpdateNewData)
    }catch(err){
        res.status(400).json({Err:err})
    }
}

// Update Data
const UpdateSingleValue = async(req,res) => {
    const {id} = req.params

    // if params id is not valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        console.log('params id is not valid')
        return res.status(404).json({error:'params id is not valid'})
    }

    // if params id is valid then
    try{
        const updataSingleItem = await CreateItem.findByIdAndUpdate({_id:id},{...req.body})
        res.status(200).json({updated:updataSingleItem})
    }
    catch(err)
    {console.log(`${err} in single item update`)}
    
}

// Delete Single Data
const deleteData = async(req,res) => {
const {id} = req.params

// Check if params id is Valid
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'params id is not valid'})
}


const deletedItem = await CreateItem.findByIdAndDelete(id)
res.status(200).json(deletedItem)
}

module.exports = {LimitData,getAllData,singleData,NewData,UpdateSingleValue,deleteData}