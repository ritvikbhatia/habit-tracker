// *************************************************************************
//Require Mongoose
var mongoose = require('mongoose');

// **************************************************************************
//Define a schema
var Schema = mongoose.Schema;

var habitSchema = new Schema({
      name: {
        type:String,
        required:true
    },
    Monday:{
      type:String,
      default: 'a'
    },
    Tuesday:{
      type:String,
      default: 'a'
    },
    wednesday:{
      type:String,
      default: 'a'
    },
    thursay:{
      type:String,
      default: 'a'
    },
    friday:{
      type:String,
      default: 'a'
    },
    saturday:{
      type:String,
      default: 'a'
    },
    sunday:{
      type:String,
      default: 'a'
    }
 
},{
    timestamps:true
});

var Habits = mongoose.model('Habits', habitSchema );

//exporting habits module
module.exports=Habits;