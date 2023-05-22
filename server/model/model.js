const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  middlename: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: Number,
  contact_number: String,
  password: String,
  usertype: String,
}, { collection: 'User' });

const Userdb = mongoose.model('User', schema);

module.exports = Userdb;
