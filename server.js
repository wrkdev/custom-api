/* MAIN SERVER FILE FOR SETTING UP CUSTOM-API SERVER */
import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

/* USEFUL IMPORTS */
import routes from './src/routes';

const app = express();

/* SETUP OF MIDDLEWARE */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* SETUP OF ROUTES */
app.use('/users', routes.user);
app.use('/api', routes.api);

app.listen(process.env.PORT, () => {
  console.log(`Application started and listening on port ${process.env.PORT}`);
});