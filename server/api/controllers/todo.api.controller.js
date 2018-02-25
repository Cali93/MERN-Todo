import mongoose from 'mongoose';

import Todo from '../models/todo.api.model';

// Retrieving all the todos
export const getTodos = (req, res, next) => {
  Todo.find()
    .select("_id createdAt name description")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        todos: docs.map(doc => {
          return {
            _id: doc._id,
            createdAt: doc.createdAt,
            name: doc.name,
            description: doc.description,
            request: {
              type: "GET",
              url: "http://localhost:3000/api/todos/" + doc._id
            }
          }
        })
      }
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    })
}

// Adding a new todo
export const addTodo = (req, res, next) => {
  const newTodo = new Todo({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    createdAt: req.body.createdAt
  });
  newTodo
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created todo successfully",
        createdTodo: {
          _id: result._id,
          createdAt: result.createdAt,
          name: result.name,
          description: result.description,
          request: {
            type: 'GET',
            url: "http://localhost:3000/api/todos/" + result._id
          }
        }
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error:err
      })
    })
}

// Getting a single todo
export const getTodo = (req, res, next) => {
  const id = req.params.todoId;
  Todo.findById(id)
    .select('name description _id createdAt')
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
            product: doc,
            request: {
                type: 'GET',
                url: 'http://localhost:3000/api/todos/'
            }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}

// Updating a todo
export const updateTodo = (req, res, next) => {
  
  const id = req.params.todoId;

  Todo.findOneAndUpdate({ _id: id }, req.body, { new:false })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Todo updated',
          request: {
              type: 'GET',
              url: 'http://localhost:3000/api/todos/' + id
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

// Deleting a todo
export const deleteTodo = (req, res, next) => {
  const id = req.params.todoId
  Todo.remove({_id:id})
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Todo deleted',
        request: {
            type: 'POST',
            url: 'http://localhost:3000/api/todos/',
            body: { name: 'String', description: 'string' }
        }
      })
    })
}