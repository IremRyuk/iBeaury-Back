const express = require('express')
const router = express.Router()
// const {getAllUsers,singleUser,NewUser,UpdateSingleUser,deleteeUser} = require('../controllers/dataControllers')
const {logIn,signUp,AllUsers,FindUser,DeleteUser} = require('../controllers/dataUsersCont')

// routes Admin
router.get('/',AllUsers)
router.get('/:id',FindUser)
router.delete('/:id',DeleteUser)
// router.post('/',NewUser)
// router.patch('/:id',UpdateSingleUser)

// routes users
router.post('/login',logIn)
router.post('/signup',signUp)

module.exports = router