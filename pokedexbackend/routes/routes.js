const { response, request } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplate = require('../models/SignUpModels')

router.post('/signup', (req, res )=>{
    const signedUpUser = new signUpTemplate({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    signedUpUser.save().then( data =>{
        response.json(data)
    })
    .catch(err =>{
        response.json(err)        
    })
})
module.exports = router 
