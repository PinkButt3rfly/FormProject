const mongoose = require('mongoose')


const uri = "mongodb+srv://pinkbutterfly:plantinum24@cluster0.fgqywff.mongodb.net/cyberschool?retryWrites=true&w=majority&appName=Cluster0"


exports.dbconnect = async () => await mongoose.connect(uri);
