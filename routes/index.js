// ****************************************************************************
// required modules

const express=require('express');
const home_controller=require('../controllers/home_controller');

// ******************************************************************************
//using router
const router=express.Router();


//calling the routes
router.get('/', home_controller.home);
router.post('/addhabit',home_controller.addhabit);


//exporting router
module.exports=router;