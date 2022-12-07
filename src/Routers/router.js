const express = require('express');
const router = express.Router();

const { adminSignIn, adminSignUp } = require('../Controllers/adminController');
const { createQuestion, getQuestion } = require('../Controllers/questionController');
const { userSignUp, userSignIn } = require('../Controllers/userModel');
const { auth } = require('../Middleware/auth');
const { validate, signUpValidator, signInValidator } = require('../Middleware/validator');

router.post('/signUp', signUpValidator, validate, adminSignUp);
router.post('/adminSignIn', signInValidator, validate, adminSignIn);

router.post('/user-signUp', signUpValidator, validate, userSignUp);
router.post('/user-signIn', signInValidator, validate, userSignIn);

router.post('/create-question', auth, createQuestion);
router.get('/get-question', getQuestion);

module.exports = router;