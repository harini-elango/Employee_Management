import express from 'express';
import { createEmployeeController, getAllEmployeesController } from '../Controller/createEmployeeController.js';

const router = express.Router();

// Create a new Employee with different roles
router.post('/employees', createEmployeeController
);

// Get all employees
router.get('/employees/:id', getAllEmployeesController);

export default router;
