const express = require('express');
const router = express.Router();

const { signUp, signIn } = require('../Controllers/adminController');
const { auth } = require('../Middleware/auth');
const { validate, signUpValidator, signInValidator } = require('../Middleware/validator');

router.post('/sign-up', signUpValidator, validate, signUp);
router.post('/sign-in', signInValidator, validate, signIn);

module.exports = router;