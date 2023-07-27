import { body, param, validationResult } from 'express-validator';
import Employee from '../Model/createEmployeeModel.js';

// Role request validation and sanitization
const preparevalidateemployeedata = async (req) => {
  // Validation and sanitization rules for request fields
  const validations = [
    body('firstname').isString().notEmpty().withMessage('Firstname is required'),
    body('lastname').isString().notEmpty().withMessage('Lastname is required'),
    body('gender').isIn(['Male', 'Female', 'Other']).withMessage('Invalid gender'),
    body('address').isString().notEmpty().withMessage('Address is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('mobile_no').matches(/^[0-9]{10}$/).withMessage('Mobile number must contain exactly 10 digits').toInt(), // Convert the valid 10-digit number to an integer
    body('age').isInt().withMessage('Age must be an integer'),
    body('date_of_join').isDate().withMessage('Invalid date format for date_of_join'),
    body('dept_id').isInt().withMessage('Department ID must be an integer'),
    body('dept_name').isString().notEmpty().withMessage('Department Name is required'),
    body('role_id').isInt().withMessage('Role ID must be an integer'),
    body('role_name').isString().notEmpty().withMessage('Role Name is required'),
    body('reporting_to_id').isInt().withMessage('Reporting to ID must be an integer'),
    body('inserted_by').isString().withMessage('Inserted by must be a string'),
    body('updated_by').isString().withMessage('Updated by must be a string'),
    body('is_active_flag').isBoolean().withMessage('is_active_flag must be a boolean'),
  ];

  // Run validations using the validation middleware
  await Promise.all(validations.map(validation => validation.run(req)));

  // Check if there are validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return errorMessages;
  }

  // If no validation errors, return an empty array
  return [];
};

export { preparevalidateemployeedata };



 const createEmployee = async (employeeData) => {
  try {
    const { emp_id } = employeeData;


    // To check if an employee with the provided emp_id already exists
    const employeeExists = await Employee.exists({ emp_id });
    if (employeeExists) {
      console.log(`Employee with emp_id ${emp_id} already exists. No new employee created.`);
      return null;
    }

    // If the employee with emp_id doesn't exist, proceed with creating the new employee
    const newEmployee = new Employee(employeeData);
    const savedEmployee = await newEmployee.save();
    console.log('New employee created with different roles and saved:', savedEmployee);
    return savedEmployee;
  } catch (error) {
    console.error('Error occurred during employee creation:', error);
    throw new Error('Failed to create an employee with different roles');
  }
};


const getAllEmployees = async (employeeId) => {
  return Employee.findOne({ emp_id: employeeId });
};

export{
  createEmployee,
  getAllEmployees,
}