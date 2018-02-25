import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import config from './api/config/database';
import bb from 'express-busboy';
import SourceMapSupport from 'source-map-support';
// import routes
import todoRoutes from './api/routes/todo.api.route';

// define our app using express
const app = express();

// express-busboy to parse multi-part/form-data
bb.extend(app);

// configure app
app.use(logger('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// connexion to the MongoDB collection

mongoose.Promise = global.Promise;
mongoose.connect(config.database)
.then(() => console.log(`Connected to database ${config.database}`))
.catch((err) => console.log(`Database error: ${err}`));

// adding Source Map Support
SourceMapSupport.install();

// allow cors (cross origin ressources sharing)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
// app.use('/user', userRoutes);
app.use('/api/todos', todoRoutes);
// app.use('/products', productRoutes);
// app.use('/orders', orderRoutes);

// Handle errors
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

export default app;