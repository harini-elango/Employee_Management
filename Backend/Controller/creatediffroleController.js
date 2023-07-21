// controllers/creatediffroleController.js
import Employee from '../Model/creatediffroleModel.js';

// Create a new Employee with different roles
const createEmployee = async (req, res) => {
  try {
    const { emp_id, firstname, lastname, gender, address, email, mobile_no, age, date_of_join, dept_id, dept_name, role_id, role_name, reporting_to_id, inserted_by, updated_by, is_active_flag } = req.body;
    console.log('Received request to create a new employee:', req.body);

    const newEmployee = new Employee({
        emp_id,
        firstname,
        lastname,
        gender,
        address,
        email,
        mobile_no,
        age,
        date_of_join,
        dept_id,
        dept_name,
        role_id,
        role_name,
        reporting_to_id,
        inserted_by,
        updated_by,
        is_active_flag

    });

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