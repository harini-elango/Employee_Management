// Importing the request handler module
import { createEmployee } from './creatediffroleController.js';

// Function to handle the response and send it via the response object (res)
const handleCreateEmployee = async (req, res) => {
  try {
    const savedEmployee = await createEmployee(req);
    res.status(201).json(savedEmployee);
  } catch (error) {
    console.error('Error handling create employee request:', error);
    res.status(500).json({ error: 'Failed to create employee with different roles' });
  }
};

// Function to get Employee by id
const handleGetAllEmployees = async (req, res) => {
  const employeeById = req.params.id;
  try {
    const employees = await Employee.findOne({ emp_id: employeeById });
    console.log('Fetched all employees:', employees);

    res.status(200).json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
};

export { handleCreateEmployee, handleGetAllEmployees };
