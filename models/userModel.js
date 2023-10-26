const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// signup method
userSchema.statics.signup = async function(nom, email, password) {  

    // check if email exists
    const exists = await this.findOne({ email }); 
    if (exists) {
        throw Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
  
    const user = await this.create({ nom, email, password: hash });
  
    return user;
}

module.exports = mongoose.model('User', userSchema)