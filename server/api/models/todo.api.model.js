import mongoose from 'mongoose';
const todoSchema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  name:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  }
});
export default mongoose.model('Todo', todoSchema);