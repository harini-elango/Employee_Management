import { validationResult } from 'express-validator';
import { createEmployee, getAllEmployees } from '../Request/creatediffroleRequest.js';
import { handleSuccessResponse, handleErrorResponse } from '../Response/creatediffroleResponse.js';
import { validateCreateEmployee } from '../Response/employeeValidation.js';

export const createEmployeeController = async (req, res) => {
  try {
    await validateCreateEmployee(req, res);

    const toCreateEmployee = req.body;
    console.log('Received request to create a new employee:', toCreateEmployee);

    // Validate if the emp_id is not already in the database
    const isEmployeeIdValid = await validateEmployeeId(toCreateEmployee.emp_id);
    if (!isEmployeeIdValid) {
      return handleErrorResponse(res, 'Employee ID already exists', 409); // 409 Conflict
    }

    // Run the validation middleware for creating a new Employee

    // If there are validation errors, the middleware will return a response with status code 400
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // If the emp_id and other fields are valid, proceed to create the employee
    const savedEmployee = await createEmployee(toCreateEmployee);
    console.log('New employee created with different roles and saved:', savedEmployee);

    handleSuccessResponse(res, savedEmployee, 200);
  } catch (error) {
    handleErrorResponse(res, 'Failed to create employee with different roles', 500);
  }
};

export const getAllEmployeesController = async (req, res) => {
  const employeeById = req.params.id;
  try {
    const employees = await getAllEmployees(employeeById);
    console.log('Fetched all employees:', employees);

    handleSuccessResponse(res, employees, 200);
  } catch (error) {
    handleErrorResponse(res, 'Failed to fetch employees', 500);
  }
};
