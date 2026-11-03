const mongoose = require('mongoose')

const tareasSchema = mongoose.Schema({
    descripicon: {
        type: mongoose.Schema.Types.ObjectId,
        requiered: true,
        ref: 'User'
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Tarea', tareasSchema)