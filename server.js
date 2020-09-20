/* MAIN SERVER FILE FOR SETTING UP CUSTOM-API SERVER */
import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import createError from 'http-errors';
import logger from 'morgan';
import mongoose from 'mongoose';
import moment from 'moment';

/* IMPORT SWAGGER FILES */
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './src/swagger/swagger.json';

/* IMPORT ROUTES */
import routes from './src/routes';
const router = express.Router();

const app = express();

// Connect to Database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true}, () => {
  console.log(`Connected to Database at ${moment().format('DD/MM/YY HH:mm:ss')}`);
});

/* SETUP OF ROUTES */
router.use('/users', routes.user);
router.use('/posts', routes.posts);
router.use('/tasks', routes.tasks);

/* SETUP OF MIDDLEWARE */
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router);


app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

app.listen(process.env.PORT, () => {
  console.log(`Application started and listening on port ${process.env.PORT}`);
});