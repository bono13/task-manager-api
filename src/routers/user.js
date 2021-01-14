const express = require('express');

const auth = require('../middleware/auth');

//USER CONTROLLERS
const userControllers = require('../controllers/user-controllers');

const router = new express.Router();

//CREATE ACCOUNT
router.post('/users', userControllers.createUser);
//USER LOGIN
router.post('/users/login', userControllers.userLogin);
//Logout route explained in notes
router.post('/users/logout', auth, userControllers.userLogout);
//LogoutAll
router.post('/users/logoutAll', auth, userControllers.logoutAll);
//GET PROFILE
router.get('/users/me', auth, userControllers.getProfile);

//UPDATE PROFILE
router.patch('/users/me', auth, userControllers.updateProfile);
//DELETE ACCOUNT
router.delete('/users/me', auth, userControllers.deleteProfile);

module.exports = router;
