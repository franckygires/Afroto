const { url } = require('inspector');
const mongoose = require('mongoose');
const TaskSchema = mongoose.Schema({

  title: { 
    type: String, 
    required: true,
    validate (value) {
      if(value.search(/[a-zA-Z]/) < 0) {
        throw new Error('Title must contains letter !')
      }
    }
  
  
  },



  message: { 
    type: String,
    required: false
  
  },



  author:{
    type: mongoose.Schema.Types.ObjectId, 
    ref:"User",
    required: true
    
  },




  date: {
    type: Date,
    default: Date.now().toString()
  }



},
{
  timestamps : true
});

module.exports = mongoose.model('Task', TaskSchema);
