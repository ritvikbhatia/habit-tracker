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
router.get('/showHabits',home_controller.showHabits);
router.post('/delHabits',home_controller.delHabits)
router.post('/delAll',home_controller.delAll)

router.use('/habits', require('./habits'));


//exporting router
module.exports=router;