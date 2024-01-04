const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is Required'
    },
    email: {
        type: String,
        trim: true,
        required: 'Email is Required'
    },
    password: {
        type: String,
        trim: true,
        required: 'Password is required'
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    avatar: {
        data: Buffer,
        contentType: String
    },
    status: {
        type: Boolean,
        default: true
    }
})

UserSchema.methods.toJSON = function(){
    const { __v, created, ...user } = this.toObject();
    user.id = user._id;
    delete user._id;

    return user;
}

module.exports = model('User', UserSchema);