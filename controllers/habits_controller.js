/* **********************************************************************************/
//Require modules

const Habits=require('../models/habits');


/* **********************************************************************************/
//render homepage

module.exports.home=async function(req,res){
    let hid= await Habits.findById(req.query.id);
    res.render('habit.ejs',{
        name:hid.name
    })
}
