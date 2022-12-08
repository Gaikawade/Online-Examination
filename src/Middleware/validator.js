const { check, validationResult } = require("express-validator");

exports.signUpValidator = [
    check("firstName")
        .trim()
        .not()
        .isEmpty()
        .withMessage("First Name is missing"),
    check("lastName")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Last Name is missing"),
    check("email")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Email is missing")
        .normalizeEmail()
        .isEmail()
        .withMessage("Email is invalid"),
    check("password")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Password is missing")
        .isLength({ min: 8, max: 20 })
        .withMessage("Password must be 8 to 20 characters long"),
    check("phone")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Phone is missing")
        .matches(/^(\+91)?0?[6-9]\d{9}$/g)
        .withMessage("Phone number must contain 10 digits only"),
];

exports.signInValidator = [
    check("email")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Email is missing")
        .normalizeEmail()
        .isEmail()
        .withMessage("Email is invalid"),
    check("password").trim().not().isEmpty().withMessage("Password is missing"),
];

(exports.createQuizValidator = [
    check("name").trim().not().isEmpty().withMessage("Quiz name is missing"),
    check("questionsList.*.questionNumber")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Question number is missing")
        .isInt()
        .withMessage("Question number must be a number"),
    check("questionsList.*.question")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Question is missing")
        .isString()
        .withMessage("Question must be of alphanumeric type"),
    check("questionsList.*.options")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Options are missing"),
    check("createdBy")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Admin ID is missing"),
    check("answers").trim().not().isEmpty().withMessage("Answers are missing"),
]),
    (exports.validate = (req, res, next) => {
        const err = validationResult(req).array();
        if (err.length) {
            return res.status(400).json({ msg: err[0].msg });
        }
        next();
    });
