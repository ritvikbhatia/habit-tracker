// ****************************************************************************
// required modules

const express=require('express');
const habit_controller=require('../controllers/habits_controller');

// ******************************************************************************
//using router
const router=express.Router();


//calling the routes
router.get('/', habit_controller.home);
router.post('/show', habit_controller.show);
router.post('/getval', habit_controller.getval);

module.exports=router;