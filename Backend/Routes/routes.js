import express from 'express';

import {
  createEmployee,
  getAllEmployees,
} from '../Controller/creatediffroleController.js';

  
const router = express.Router();


// Create a new Employee with different roles
router.post('/employees', createEmployee);


// Get all employees
router.get('/employees/:id', getAllEmployees);

export default router;

