const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true, minlength: 3 },
  password: { type: String, required: true, minlength: 6 },
  admin: { type: Boolean, required: true, default: false },
  createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
