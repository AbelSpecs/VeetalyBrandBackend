const { response, request } = require('express');
const User = require("../models/user");
const bcrypt = require('bcryptjs');

const CreateUser = async(req = request, res = response) => {
    try {
        const user = new User(req.body);
        const { password } = user;
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();
        console.log(user);
        res.json(user);

    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    CreateUser
}