const express = require('express')
const studentcontroller = require('../controllers/studentController')


const router = express.Router()

router.post('register', studentcontroller.registerStudent)

// router.post('/register', (req, res) => {
//     const formData = req.body;

//     console.log('Recieved form data:', formData);

//     res.json({ message: 'Registration successful'})
// });


module.exports = router;
