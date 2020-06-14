/* **********************************************************************************/
//Require modules

const Habits=require('../models/habits');


/* **********************************************************************************/
//render homepage

module.exports.home=function(req,res){
    res.render('home.ejs')
}


/* **********************************************************************************/
//adding  habits to db

module.exports.addhabit=async function(req,res){
    let habit=await Habits.create(req.body);
    if(req.xhr)
    {
        // req.flash('success', 'Task Updated');
        res.status(200).json({
            data:habit,
            message:"success xhr"
        })
    }
    return;
}


/* **********************************************************************************/
//Displaying tasks

module.exports.showHabits=async function(req,res){
    
    let habits= await Habits.find({});
    if(req.xhr)
    {
        res.status(200).json({
            data:habits,
            message:"success xhr"
        })
    }
    return;
}


/* **********************************************************************************/
//Deleting Habits from the database

module.exports.delHabits=async function(req,res){

    for(let i of req.body.del)
    {
        await Habits.findByIdAndDelete(i);
    }
    let habits= await Habits.find({});
    if(req.xhr)
    {
        
        res.status(200).json({
            data:habits,
            message:"success xhr"
        })
    }
    return;
}

/* **********************************************************************************/
//Deleting All Tasks from the database

module.exports.delAll=async function(req,res){

    await Habits.deleteMany({});
    if(req.xhr)
    {
        res.status(200).json({
            message:"success xhr"
        })
    }
    return;
}
