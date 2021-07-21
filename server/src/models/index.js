import mongoose from 'mongoose';

import Contact from './contact';

const connectDb = () => {
  console.log("DB ..connected")
  return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
};

const models = { Contact };

export { connectDb };

export default models;
