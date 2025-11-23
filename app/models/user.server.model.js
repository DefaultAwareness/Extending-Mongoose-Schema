
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: 'Email address is required'
    },
    username: {
        type: String,
        trim: true,
        required: 'Username is required'
    },
    password: {
        unique: true,
        type: String,
        required: 'Password is required'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('User', UserSchema);

