// ****************************************************************************
// required modules

const express=require('express');
const habit_controller=require('../controllers/habits_controller');

// ******************************************************************************
//using router
const router=express.Router();


//calling the routes
router.get('/', habit_controller.home);

module.exports=router;