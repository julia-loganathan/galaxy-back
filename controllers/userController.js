const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '7d'})
}

// login user
const loginUser = async  (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
  
        //create a token
        const token = createToken(user._id)
          // send response with token
        res.status(200).json({id: user._id,nom: user.nom, email, token})
      } catch (error) {
        res.status(400).json({error: error.message})
      }
}

// signup user
const signupUser = async  (req, res) => {
    const {nom, email, password} = req.body

    try {
      const user = await User.signup(nom, email, password)

      //create a token
      const token = createToken(user._id)
        // send response with token
      res.status(200).json({id: user._id, nom, email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

module.exports = {
    signupUser,
    loginUser,
}