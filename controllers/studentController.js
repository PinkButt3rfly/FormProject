const Student = require('../models/studentModel')



/*exports.registerStudent = (req, res) => {
    const requestBody = req.body;
    console.log(req.body);
    res.json('Registration successfull')
};*/



exports.registerStudent =  async function(req, res) {
    const student = await Student.create(req.body);


    console.log(student);
    res.json('Registration successfull');
};


// // Root URL
// exports.path = ('/register', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client-Side', 'Form.html' ));
// });*/
