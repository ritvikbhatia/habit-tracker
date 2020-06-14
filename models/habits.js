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
    monday:{
      type:String
    },
    tuesday:{
      type:String
    },
    wednesday:{
      type:String
    },
    thursay:{
      type:String
    },
    friday:{
      type:String
    },
    saturday:{
      type:String
    },
    sunday:{
      type:String
    }
 
},{
    timestamps:true
});

var Habits = mongoose.model('Habits', habitSchema );

//exporting habits module
module.exports=Habits;