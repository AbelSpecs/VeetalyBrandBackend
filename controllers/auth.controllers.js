const { response, request } = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwtGenerator = require('../helpers/token-generator');

const LoginUser = async(req = request, res = response) => {    
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        const validPassword = await bcrypt.compare(password, user.password);

        if(!user){
            return res.status(400).json({msg: 'Email does not exist'})
        }

        if(!validPassword){
            return res.status(400).json({msg: 'Password is not correct'})
        }
        
        const token = await jwtGenerator(user.id);
        const { id, name } = user;

        res.json({id, name, token});    
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { LoginUser }