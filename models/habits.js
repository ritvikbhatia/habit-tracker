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
    Wednesday:{
      type:String,
      default: 'a'
    },
    Thursday:{
      type:String,
      default: 'a'
    },
    Friday:{
      type:String,
      default: 'a'
    },
    Saturday:{
      type:String,
      default: 'a'
    },
    Sunday:{
      type:String,
      default: 'a'
    }
 
},{
    timestamps:true
});

var Habits = mongoose.model('Habits', habitSchema );

//exporting habits module
module.exports=Habits;