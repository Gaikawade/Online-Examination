const questionModel = require("../Models/questionModel");
const { sendError } = require("../Utils/errorHandler");

exports.createQuestion = async (req, res) => {
    let data = req.body;
    let { questionNumber, question, options } = data;

    let isPresent = await questionModel.findOne({ questionNumber });
    if (isPresent) {
        return sendError(res, "Question is already present");
    }
    isPresent = await questionModel.findOne({ question });
    if (isPresent) {
        return sendError(res, "Question is already present");
    }

    if(Array.isArray(options)){
      console.log(options.length);
      if(options.length < 3 || options.length > 5){
        return sendError(res, "Option's size can't be less than 3 and greater than 5");
      }
    } else {
      return sendError(res, "Options must be an array");
    }

    const newQuestion = new questionModel(req.body);
    await newQuestion.save();

    return res.status(201).json({ data: newQuestion });
};

exports.getQuestion = async (req, res) => {
  const noOfDocuments = await questionModel.count();
  let random = Math.floor(Math.random()) * noOfDocuments;
  console.log(random);
  res.json({random})
};