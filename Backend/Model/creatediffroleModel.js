import { Schema, model } from 'mongoose';
import dbConnection from '../Config/MongoDB.js';

const employeeSchema = new Schema({
  emp_id: {
    type: Number,
    unique: true,
    // Regular expression for a positive integer (one or more digits)
    validate: {
      validator: function (v) {
        return /^\d+$/.test(v);
      },
      message: 'Employee ID must be a positive integer.',
    },
    required: [true, 'Employee ID is required.'],
  },
  firstname: {
    type: String,
    match: /^[A-Za-z ]+$/,
    required: [true, 'First name is required.'],
  },
  lastname: {
    type: String,
    match: /^[A-Za-z ]+$/,
    required: [true, 'Last name is required.'],
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: [true, 'Gender is required.'],
  },
  address: {
    type: String,
    match: /^[A-Za-z0-9 .,-]+$/,
    required: [true, 'Address is required.'],
  },
  email: {
    type: String,
    match: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
    required: [true, 'Email address is required.'],
  },
  mobile_no: {
    type: Number,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v);
      },
      message: 'Mobile number must be a 10-digit positive integer.',
    },
    required: [true, 'Mobile number is required.'],
  },
  age: {
    type: Number,
    validate: {
      validator: function (value) {
        return /^\d+$/.test(value) && value >= 21;
      },
      message: 'Age must be a positive integer and at least 21 years old.',
      required: [true, 'Age is required.'],
    },
  },
  
  date_of_join: {
    type: Date,
    required: [true, 'Date of join is required.'],
  },
  dept_id: {
    type: Number,
    validate: {
      validator: function (v) {
        return /^\d+$/.test(v);
      },
      message: 'Department ID must be a positive integer.',
    },
    required: [true, 'Department ID is required.'],
  },
  dept_name: {
    type: String,
    match: /^[A-Za-z ]+$/,
    required: [true, 'Department name is required.'],
  },
  role_id: {
    type: Number,
    validate: {
      validator: function (v) {
        return /^\d+$/.test(v);
      },
      message: 'Role ID must be a positive integer.',
    },
    required: [true, 'Role ID is required.'],
  },
  role_name: {
    type: String,
    match: /^[A-Za-z ]+$/,
    required: [true, 'Role name is required.'],
  },
  reporting_to_id: {
    type: Number,
    validate: {
      validator: function (v) {
        return /^\d*$/.test(v);
      },
      message: 'Reporting to ID must be a positive integer or an empty field.',
    },
  },
  inserted_date: {
    type: Date,
    default: Date.now,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
  is_active_flag: {
    type: Boolean,
    default: true,
  },
  inserted_by: {
    type: String,
    match: /^[A-Za-z]+$/,
  },
  updated_by: {
    type: String,
    match: /^[A-Za-z]+$/,
  },
});


const Employee = model('Employee', employeeSchema);

export default Employee;
