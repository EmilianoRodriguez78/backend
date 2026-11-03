const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const crearUser = asyncHandler(async(req, res) =>  {
    //desestructuramos el body
    const {nombre, email, password} = req.body

    //validamos que nos pasen los datos requeridos
    if(!nombre || !email || !password){
        res.status(400)
        throw new Error("Faltan datos")
    }

    const userExiste = await User.findOne({email})
    if(userExiste){
        res.status(400)
        throw new Error ("Usuario ya existente")
    } 

    //hacemos hash al password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //crear el usuario
    const user = await User.create({
        nombre,
        email:email,
        password: hashedPassword
    })

    if (user){
        res.status(201).json({
            _id:user.id,
            nombre: user.nombre,
            email: user.email,
            password: user.password
        })
    } else {
        res.status(400)
        throw new Error("No se pudieron guardar los datos")
    }

})

const loginUser = asyncHandler(async(req, res) =>  {
    //desestructuramos el body
    const{email, password} = req.body

    //verificamos que el usuario exite
    const user = await User.findOne({email})

    //verificamos el password
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id:user.id,
            nombre:user.nombre,
            email:user.email,
            token:generarToken(user.id)
        })
    }else {
        res.status(403)
        throw new Error("Credenciales incorrectas")
    }

})

const datosUser = asyncHandler(async(req, res) =>  {
    res.status(200).json(req.user)
})

const generarToken = (id_usuario) => {
    return jwt.sign({id_usuario}, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}

module.exports = {
    crearUser, loginUser, datosUser
}