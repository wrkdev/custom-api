/* MAIN SERVER FILE FOR SETTING UP CUSTOM-API SERVER */
import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import createError from 'http-errors';
import logger from 'morgan';
import mongoose from 'mongoose';
import moment from 'moment';

/* IMPORT ROUTES */
import routes from './src/routes';

const app = express();

/* SETUP OF MIDDLEWARE */
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* SETUP OF ROUTES */
app.use('/users', routes.user);
app.use('/api', routes.api);
app.use('/posts', routes.posts);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true}, () => {
  console.log(`Connected to Database at ${moment().format('DD/MM/YY HH:mm:ss')}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Application started and listening on port ${process.env.PORT}`);
});