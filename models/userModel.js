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

    if (!nom ||!email || !password) {
        throw Error('Tous les champs doivent être valide')
    }

    // check if email exists
    const exists = await this.findOne({ email }); 
    if (exists) {
        throw Error('Email déja utilisé');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
  
    const user = await this.create({ nom, email, password: hash });
  
    return user;
}

//login method
userSchema.statics.login = async function(email, password) {

    if (!email || !password) {
        throw Error('Tous les champs doivent être valide')
    }

    // check if email exists
    const user = await this.findOne({ email })

    if (!user) {
        throw Error('utilisateur non trouvé')
    }

    // compare pw

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('mauvais mot de passe')
    }

    return user
}


module.exports = mongoose.model('User', userSchema)