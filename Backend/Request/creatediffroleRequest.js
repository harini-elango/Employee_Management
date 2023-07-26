import Employee from '../Model/creatediffroleModel.js';

export const createEmployee = async (employeeData) => {
  const newEmployee = new Employee(employeeData);
  return newEmployee.save();
};

export const getAllEmployees = async (employeeId) => {
  return Employee.findOne({ emp_id: employeeId });
};