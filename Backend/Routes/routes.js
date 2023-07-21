import express from 'express';

import {
<<<<<<< HEAD
  createEmployee,
  getAllEmployees,
} from '../Controller/creatediffroleController.js';
=======
  createDepartment, getAllDepartments, getDepartmentById, updateDepartmentById, deleteDepartmentById,
} from '../Controller/departmentController.js';
>>>>>>> f03f114044a2b2219148a219c2b0218794a2e80c

import {
   makeRoleInactive , listRoles, createRole, getAllRoles, getRoleById, updateRoleById, deleteRoleById,
} from '../Controller/roleController.js';

import {
  createEmployee, getAllEmployees, getEmployeeById, updateEmployeeById , deleteEmployeeById, makeEmployeeInactive, listUsersByManager,
} from '../Controller/employeeConroller.js'

const router = express.Router();

<<<<<<< HEAD
=======
/************************************ */
// API are listed in the use cases
/************************************ */

// Create a new role
router.post('/roles', createRole);

// Update a role by role ID
router.put('/roles/:role_id', updateRoleById);

// API to make the role inactive
router.put('/ract/:role_id', makeRoleInactive);

// List the active and In-active roles
router.post('/active', listRoles);

// Get a role by role ID
router.get('/roles/:role_id', getRoleById);

// Create a new employee
router.post('/employees', createEmployee);

// Update an employee by emp_id
router.put('/employees/:emp_id', updateEmployeeById);

// Make an employee inactive by emp_id
router.put('/employees/inactive/:emp_id', makeEmployeeInactive);

// Route to list users with a filter by manager's role_name
router.get('/users', listUsersByManager);

// Get an employee by emp_id
router.get('/employees/:emp_id', getEmployeeById);

// Delete an employee by emp_id
router.delete('/employees/:emp_id', deleteEmployeeById);


/************************************ */
// Extra API not listed in the use cases
/************************************ */

// Create a new department
router.post('/departments', createDepartment);
>>>>>>> f03f114044a2b2219148a219c2b0218794a2e80c

// Create a new Employee with different roles
router.post('/employees', createEmployee);

<<<<<<< HEAD
// Get a Employee
router.get('/employees/:id', getAllEmployees);

=======
// Get all roles
router.get('/roles', getAllRoles);

// Delete a role by role ID
router.delete('/roles/:role_id', deleteRoleById);

// Get a department by department ID
router.get('/departments/:id', getDepartmentById);

// Update a department by department ID
router.put('/departments/:id', updateDepartmentById);

// Delete a department by department ID
router.delete('/departments/:id', deleteDepartmentById);

// Get all employees
router.get('/employees', getAllEmployees);
>>>>>>> f03f114044a2b2219148a219c2b0218794a2e80c

export default router;

