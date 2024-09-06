const express = require('express');
const router = express.Router()
const {getstudents ,createstudents, LoginUser , DeleteUser, GetUserById, UpdateUser} = require('../Controllers/userControllers')
// get user
router.get('/' , getstudents)

// create user
router.post('/', createstudents)
router.post('/loign' , LoginUser)
router.delete('/delete/:id' , DeleteUser)
router.get('/singleuser/:id' , GetUserById)
router.put("/updateuser/:id" ,UpdateUser)


module.exports = router;