const { isValidObjectId } = require("mongoose");
const quizModel = require("../Models/quizModel");
const { sendError } = require("../Utils/errorHandler");

exports.createQuiz = async (req, res) => {
    let data = req.body;
    let { name, createdBy } = data;

    if(!isValidObjectId(createdBy)){
      return sendError(res, 'Invalid Admin ID');
    }

    let quiz = await quizModel.findOne({ name });
    if (quiz) {
        return sendError(res, "Quiz is already present");
    }
    // let questionCheck = quiz.some(list => list.questionList.question === questionList.question);
    // if(questionCheck){
    //   return 
    // }

    const newQuestion = new quizModel(req.body);
    await newQuestion.save();

    return res.status(201).json({ data: newQuestion });
};

exports.getQuestion = async (req, res) => {
  const noOfDocuments = await quizModel.count();
  let random = Math.floor(Math.random()) * noOfDocuments;
  console.log(random);
  res.json({random})
};