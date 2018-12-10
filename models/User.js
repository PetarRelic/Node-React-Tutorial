const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const { Schema } = mongoose; is the same as line above

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);