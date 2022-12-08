const express = require('express');
const router = express.Router();

const { adminSignIn, adminSignUp } = require('../Controllers/adminController');
const { createQuiz } = require('../Controllers/quizController');
const { userSignUp, userSignIn } = require('../Controllers/userModel');
const { auth } = require('../Middleware/auth');
const { validate, signUpValidator, signInValidator, createQuizValidator } = require('../Middleware/validator');

router.post('/admin-signUp', signUpValidator, validate, adminSignUp);
router.post('/admin-SignIn', signInValidator, validate, adminSignIn);

router.post('/user-signUp', signUpValidator, validate, userSignUp);
router.post('/user-signIn', signInValidator, validate, userSignIn);

router.post('/create-question', createQuizValidator, validate, createQuiz);
// router.get('/get-question', getQuestion);

module.exports = router;