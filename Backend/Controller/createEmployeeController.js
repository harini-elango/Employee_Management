import { createEmployee, getAllEmployees , preparevalidateemployeedata } from '../Request/createEmployeeRequest.js';
import { handleSuccessResponse, handleErrorResponse } from '../Response/createEmployeeResponse.js';
import Employee from '../Model/createEmployeeModel.js';

// Controller to create a new employee
const createEmployeeController = async (req, res) => {
  try {
    // Check for validation errors
    const validationErrors = await preparevalidateemployeedata(req);

    // If there are validation errors, send the response with the errors
    if (validationErrors.length > 0) {
      return handleErrorResponse(res, validationErrors.join(', '));
    }

    const { emp_id } = req.body;

    // To check if an employee with the provided emp_id already exists
    const employeeExists = await Employee.exists({ emp_id });
    if (employeeExists) {
      return handleErrorResponse(res, `Employee with emp_id ${emp_id} already exists. No new employee created.`);
    }

    // If the employee with emp_id doesn't exist, proceed with creating the new employee
    const savedEmployee = await createEmployee(req.body);
    return handleSuccessResponse(res, savedEmployee);
  } catch (error) {
    console.error('Error occurred during employee creation:', error);
    return handleErrorResponse(res, 'Failed to create an employee with different roles.');
  }
};


// Controller to get an employee by emp_id
const getAllEmployeesController = async (req, res) => {
  const employeeById = req.params.id;
  try {
    const employees = await getAllEmployees(employeeById);
    console.log('Fetched all employees:', employees);

    handleSuccessResponse(res, employees, 200);
  } catch (error) {
    handleErrorResponse(res, 'Failed to fetch employees', 500);
  }
};

export { createEmployeeController, getAllEmployeesController };
