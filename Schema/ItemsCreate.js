const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CreateItem = new Schema({
    image:{
        type:String,
        required:true
    },
    nameSp: {
        type: String,
        required: true
    },
    nameEN: {
        type: String,
        required: true
    },
    titleSp: {
        type: String,
        required: true
    },
    titleEN: {
        type: String,
        required: true
    },
    descrSp: {
        type: String,
        required: true
    },
    descrEN: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('dataItems', CreateItem)