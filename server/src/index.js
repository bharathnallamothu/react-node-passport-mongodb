import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import passport from 'passport';


import models, { connectDb } from './models';
import routes from './routes';

const app = express();


// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
app.use(passport.initialize());
require("./config/passport");

// Custom Middleware

app.use(async (req, res, next) => {
  req.context = {
    models
  };
  next();
});

// * Routes * //


app.use('/contacts', routes.contact);
app.use('/', routes.home);
app.use('/', routes.google);
app.use('/', routes.googleCallBack);
app.use('/', routes.facebook);
app.use('/', routes.facebookCallBack);
app.use('/', routes.linkedin);
app.use('/', routes.linkedinCallBack);

// * Start * //
app.listen(process.env.PORT, () => {
  connectDb();
  console.log(`app listening on port ${process.env.PORT}!`)
});