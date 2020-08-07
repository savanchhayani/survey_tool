import  { Document } from 'mongoose';

export interface Survey extends Document {
  email: string;
  name: string;
  age: number;
  occupation: string;
  social: string;
}
