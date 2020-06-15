/* **********************************************************************************/
//Require modules

const Habits=require('../models/habits');
const { findByIdAndUpdate } = require('../models/habits');


/* **********************************************************************************/
//render homepage

module.exports.home=async function(req,res){
    var hid= await Habits.findById(req.query.id);
    res.render('habit.ejs',{
        name:hid.name
    })
}

module.exports.getval=async function(req,res){
    if(req.xhr)
    {
        hid=req.body.a;
        day=req.body.day;
        let habit=await Habits.findById(hid);
        if(habit[day]=='a')
            habit[day]='b';
        else if(habit[day]=='b')
            habit[day]='c';
        else if(habit[day]=='c')
            habit[day]='a';
        habit.save();
        res.status(200).json({
            data:habit[day],
            message:"success xhr"
        })
    }
}
module.exports.show=async function(req,res){
    if(req.xhr)
    {
        hid=req.body.a;
        day=req.body.day;
        let habit=await Habits.findById(hid);
        // console.log(habit)
        res.status(200).json({
            data:habit[day],
            message:"success xhr"
        })
    }
}
