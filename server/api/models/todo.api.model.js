import mongoose from 'mongoose';
var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  fullName:{
    type: String,
    default: "Howdy stranger"
  },
  todoText: String
});
export default mongoose.model('Todo', Schema);