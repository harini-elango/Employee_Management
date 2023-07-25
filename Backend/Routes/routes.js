import express from 'express';
// import pkg from 'fluent-validator'; // Fix the import here
import pkg from 'fluent-validator';
const { validator } = pkg;

import {
  createEmployee,
  getAllEmployees,
} from '../Controller/creatediffroleController.js';

const router = express.Router();

// Create a new Employee with different roles
router.post('/employees', (req, res, next) => {
  validator()
    .isInt(req.body.emp_id).required().withMessage('Employee ID must contain only numbers.')
    .isAlpha(req.body.firstname).required().withMessage('First name should contain only alphabetic characters.')
    .isAlpha(req.body.lastname).required().withMessage('Last name should contain only alphabetic characters.')
    .isIn(req.body.gender, ['male', 'female', 'other']).required().withMessage('Invalid gender.')
    .isString(req.body.address).required().withMessage('Address is required.')
    .isEmail(req.body.email).required().withMessage('Invalid email address.')
    .isNumeric(req.body.mobile_no).isLength({ min: 10, max: 10 }).withMessage('Invalid mobile number. It should be a 10-digit number.')
    .isInt(req.body.age, { min: 21, max: 50 }).required().withMessage('Age must be an integer between 21 and 50.')
    .isISO8601(req.body.date_of_join).required().withMessage('Invalid date of join.')
    .isInt(req.body.dept_id).required().withMessage('Department ID must contain only numbers.')
    .isAlpha(req.body.dept_name).required().withMessage('Department name should contain only alphabetic characters.')
    .isInt(req.body.role_id).required().withMessage('Role ID must contain only numbers.')
    .isAlpha(req.body.role_name).required().withMessage('Role name should contain only alphabetic characters.')
    .isInt(req.body.reporting_to_id).required().withMessage('Reporting-to ID must contain only numbers.')
    .isAlpha(req.body.inserted_by).required().withMessage('Inserted by should contain only alphabetic characters.')
    .isAlpha(req.body.updated_by).required().withMessage('Updated by should contain only alphabetic characters.')
    .isBoolean(req.body.is_active_flag).required().withMessage('Invalid value for is_active_flag.')
    .throwOnError();

  // If validation is successful, proceed to the next middleware or route handler
  next();
}, createEmployee);

  
// const router = express.Router();


// // Create a new Employee with different roles
// router.post('/employees', createEmployee);


// Get all employees
router.get('/employees/:id', getAllEmployees);

export default router;

