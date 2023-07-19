// models/department.js
import { Schema, model } from 'mongoose';
import dbConnection from '../Config/MongoDB.js'; // Import the MongoDB connection from "MongoDB.js"

// Define the department schema
const departmentSchema = new Schema({
  dept_id: {
    type: Number,
    required: true,
    unique: true,
  },
  dept_name: {
    type: String,
    required: true,
  },
  inserted_by: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
  },
  updated_by: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
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
});

// Create the "Department" model using the departmentSchema and the existing connection
const Department = model('Department', departmentSchema);

// Export the Department model
export default Department;
