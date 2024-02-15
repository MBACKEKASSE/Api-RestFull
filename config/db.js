   const mongoose = require('mongoose')
async function connect() {
    try {
       await mongoose.connect("mongodb://0.0.0.0:27017/config");
       console.log("connexion au mongodb");
    } catch (error) {
      //  console.log(error);
       
    }
   //  connect();
    
 }

 module.exports = connect;