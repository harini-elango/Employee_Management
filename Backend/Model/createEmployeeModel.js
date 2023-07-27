import { Schema, model } from 'mongoose';
// import dbConnection from '../Config/MongoDB.js';

const employeeSchema = new Schema({
  emp_id: {
    type: Number,
    unique: true,
    required:true,
    index:true,
  },
  firstname: {
    type: String,
    required:true,
  },
  lastname: {
    type: String,
    required:true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required:true,
  },
  address: {
    type: String,
    required:true,
  
  },
  email: {
    type: String,
    required:true,
  
  },
  mobile_no: {
    type: Number,
    required:true,
  },
  age: {
    type: Number,
    required:true,
  },
  
  date_of_join: {
    type: Date,
    required:true,
  },
  dept_id: {
    type: Number,
    required:true,
  },
  dept_name: {
    type: String,
    required:true,
  },
  role_id: {
    type: Number,
    required:true,
  },
  role_name: {
    type: String,
    required:true,
  },
  reporting_to_id: {
    type: Number,
    required:true,
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
  },
  updated_by: {
    type: String,
  },
});


const Employee = model('Employee', employeeSchema);

export default Employee;
