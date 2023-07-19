// routes/departmentRoutes.js
import express from 'express';
import {
  createDepartment,
  getAllDepartments,
} from '../Controller/departmentController.js';

const router = express.Router();

// Create a new department
router.post('/departments', createDepartment);

// Get all departments
router.get('/departments', getAllDepartments);

// // Get a department by department ID
// router.get('/departments/:id', getDepartmentById);

// // Update a department by department ID
// router.put('/departments/:id', updateDepartmentById);

// // Delete a department by department ID
// router.delete('/departments/:id', deleteDepartmentById);

export default router;

