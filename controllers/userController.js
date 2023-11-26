const userModel = require('../models/userModel.js');
const bcrypt = require('bcryptjs');

const registerController = async (req, res) => {
    try{
        const existing_user = await userModel.findOne({email: req.body.email})

        if(existing_user){
            return res.status(200).send({message: 'User already exists', success:false})
        }

        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        req.body.password = hashedPassword
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).send({message: 'User Created', success:true})

    }
    catch(error){
        console.log(error)
        res.status(500).send({success:false, message: `Register Controller Error ${error.message}`})
    }
};

const loginController = () => {};

module.exports = {loginController, registerController};
