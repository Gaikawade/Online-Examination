const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        questionsList: [
            {
                questionNumber: Number,
                question: String,
                options: Object,
            },
        ],
        answers: Object,
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        isPublished: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);
