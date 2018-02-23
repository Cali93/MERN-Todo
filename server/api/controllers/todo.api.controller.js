import mongoose from 'mongoose';

import Todo from '../models/todo.api.model';

// Retrieving all the todos
export const getTodos = (req, res) => {
  Todo.find().exec((err, todos) => {
    if (err) {
      return res.json({
        'success': false,
        'message': ' There has been an error while fetching the data'
      });
    }

    return res.json({
      'success': true,
      'message': 'Todos fetched successfully',
      todos
    });
  });
}

// Adding a new todo
export const addTodo = (req,res) => {
  const newTodo = new Todo(req.body);
  newTodo.save((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Error while creating a new todo'});
    }
return res.json({'success':true,'message':'Todo added successfully', todo});
  })
}

// Updating a todo

export const updateTodo = (req,res) => {
  Todo.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Error while updating a todo','error':err});
    }
    console.log(todo);
    return res.json({'success':true,'message':'Updated successfully',todo});
  })
}

// Getting a single todo
export const getTodo = (req,res) => {
  Todo.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Error while getting a todo'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Todo fetched by id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Todo with the given id not found'});
    }
  })
}

// Deleting a todo
export const deleteTodo = (req,res) => {
  Todo.findByIdAndRemove(req.params.id, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Error while deleting a todo'});
    }
return res.json({'success':true,'message':todo.name+' deleted successfully'});
  })
}