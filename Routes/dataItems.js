const express = require('express')
const router = express.Router()
const {LimitData,getAllData,singleData,NewData,UpdateSingleValue,deleteData} = require('../controllers/dataControllers')

// routes
router.get('/',getAllData)
router.get('/lim',LimitData)
router.get('/:id',singleData)
router.post('/',NewData)
router.patch('/:id',UpdateSingleValue)
router.delete('/:id',deleteData)

module.exports = router