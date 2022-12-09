const express=require('express');
const router=express.Router();
const userController=require('../controller/user_controller');
const passport=require('passport');

//create user
router.post('/create-user',userController.createUser);
//create session
router.post('/create-session',passport.authenticate('local',{failureRedirect:'/'}),userController.createSession);
//Dashboard
router.get('/dashboard',passport.checkAuthentication,userController.dashboard)

//signout
router.get('/signout',userController.signOut);

module.exports=router;