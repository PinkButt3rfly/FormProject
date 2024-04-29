const mongoose = require('mongoose')

const passwordValidator = function(password) {

const uppecase = /[A-Z]/;
const number = /[0-9]/;

return uppercase.test(password) && number.test(password)

}

const Student = new mongoose.Schema({
    name: { type: String, lowercase: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true
  }, 
  phoneNumber: String,
  address: String,
  gender: String,
  dateOfBirth: Date,
  state: String,
  registrationNumber: String,
  password: { 
    type: String, 
    required: true, 
    validate: [
        {
            validator: passwordValidator,
            message: 'password must contain at least one uppercase letter and one numeber'
        },
        {
            validator: function(password) {
                return password.length >= 8 && password.length <= 20;
            },
            message: 'password length must be between 8 and 20 characters'
        }
    ]
    }
  
})



module.exports = mongoose.model('register', Student)