const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Por facor teclea tu nombre']
    },
    email: {
        type: String,
        required: [true, 'Por favor teclea tu email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Por favor teclea tu contrasenia']
    },
    esAdmin: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})
module.exports = mongoose.model('User',userSchema)