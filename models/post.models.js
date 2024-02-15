const mongoose = require("mongoose");

 const postSchema = mongoose.Schema (
 {
      message: {
        type:String,
        required:true, 

    },
    
      title: {
      type:String,
      required:true,
  },
  
     description: {
    type:String,
    required:true,
     },
    
      content: {
      type:String,
      required:true,
      },
    
        author: {
            type:String,
            required:true,
        },
    
    
        likers: {
            type:[String],
            required:true,
    },
  },
  {
    timestamps:true,
  }

);
 
module.exports = mongoose.model('post',postSchema)