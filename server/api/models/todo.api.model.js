const mongoose = require ('mongoose');

var todoSchema = mongoose.Schema({
  createdAt:{
    type:Date,
    default: Date.now
  },
  todoText: String,
  todoDesc: String
});

module.exports = mongoose.model('Todo', todoSchema);