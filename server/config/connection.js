const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks')
.then((res)=>{console.log('connected to db',)})
.catch((err)=>{console.log('db error',err)})

module.exports = mongoose.connection;
