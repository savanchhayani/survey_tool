import { Schema } from 'mongoose';

export const SurveySchema = new Schema({
  name: String,
  email: String,
  age: Number,
  occupation: String,
  social: String,
});
