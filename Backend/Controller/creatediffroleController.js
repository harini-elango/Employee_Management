import Employee from '../Model/creatediffroleModel.js';

// Create a new Employee with different roles
const createEmployee = async (req, res) => {
  try {
    const toCreateEmployee = req.body;
    console.log('Received request to create a new employee:', toCreateEmployee);

    const newEmployee = new Employee(toCreateEmployee);
    const savedEmployee = await newEmployee.save();
    console.log('New employee created with different roles and saved:', savedEmployee);

    res.status(201).json(savedEmployee);
  } catch (error) {
    console.error('Error creating employee with different roles:', error);
    res.status(500).json({ error: 'Failed to create employee with different roles' });
  }
};



// To get Employee by id
const getAllEmployees = async (req, res) => {
    const employeeById = req.params.id;
    try {
      const employees = await Employee.findOne({emp_id: employeeById});
      console.log('Fetched all employees:', employees);
  
      res.status(200).json(employees);
    } catch (error) {
      console.error('Error fetching employees:', error);
      res.status(500).json({ error: 'Failed to fetch employees' });
    }
  };

  

export {
    createEmployee,
    getAllEmployees
  };