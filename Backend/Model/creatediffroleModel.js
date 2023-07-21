import { Schema, model } from 'mongoose';
import dbConnection from '../Config/MongoDB.js';

const employeeSchema = new Schema({
  emp_id: { type: Number, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  gender: { type: String, required: true },
  address: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    // Built-in email validator
    validate: {
      validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: 'Invalid email address format',
    },
  },
  mobile_no: {
    type: Number,
    required: true,
    // Custom validator for mobile numbers with 10 digits
    validate: {
      validator: (value) => /^\d{10}$/.test(value),
      message: 'Mobile number must be a 10-digit number',
    },
  },
  age: {
    type: Number,
    validate: {
      validator: (value) => value >= 21,
      message: 'Employee must be at least 21 years old',
    },
  },
  date_of_join: { type: Date, required: true },
  dept_id: { type: Number, required: true, unique: true },
  dept_name: { type: String, required: true },
  role_id: { type: Number, required: true, unique: true },
  role_name: { type: String, required: true },
  reporting_to_id: { type: Number, required: true },
  inserted_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
  is_active_flag: { type: Boolean, default: true },
  inserted_by: { type: String },
  updated_by: { type: String },
});

const Employee = model('Employee', employeeSchema);

export default Employee;
