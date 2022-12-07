const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    questionNumber: {
        type: Number,
        required: true,
        unique: true
    },
    question: {
      type: String,
      required: true,
      unique: true
    },
    options: {
      type: Array,
      required: true,
    }
});

module.exports = mongoose.model('Questions', questionSchema);