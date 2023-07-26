import { check, validationResult } from 'express-validator';

// Custom validator to check if the emp_id already exists in the database
export const validateEmployeeId = async (employeeId) => {
  const existingEmployee = await Employee.findOne({ emp_id: employeeId });
  return !existingEmployee; // If the employee is not found, the ID is valid
};


// Custom validator for firstname: accepts alphabetic characters and spaces
export const isValidFirstname = (value) => {
  // Regular expression to check for alphabetic characters and spaces
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(value);
};

// Custom validator for lastname: accepts alphabetic characters and spaces
export const isValidLastname = (value) => {
  // Regular expression to check for alphabetic characters and spaces
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(value);
};

// Custom validator for gender: accepts "male", "female", or "other"
export const isValidGender = (value) => {
  const validGenders = ['male', 'female', 'other'];
  return validGenders.includes(value.toLowerCase());
};

// Custom validator for role_name: accepts alphabetic characters and spaces
export const isValidRoleName = (value) => {
  // Regular expression to check for alphabetic characters and spaces
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(value);
};

// Custom validator for dept_name: accepts alphabetic characters and spaces
export const isValidDeptName = (value) => {
  // Regular expression to check for alphabetic characters and spaces
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(value);
};

// Validation middleware for creating a new Employee with different roles
export const validateCreateEmployee = [
  check('emp_id').isNumeric().withMessage('Employee ID must contain only numbers.')
    .custom(async (value) => {
      const isEmployeeIdValid = await validateEmployeeId(value);
      if (!isEmployeeIdValid) {
        throw new Error('Employee ID already exists');
      }
      return true;
    }),

  check('firstname').custom(isValidFirstname).withMessage('First name should contain only alphabetic characters and spaces.'),
  check('lastname').custom(isValidLastname).withMessage('Last name should contain only alphabetic characters and spaces.'),
  check('gender').custom(isValidGender).withMessage('Invalid gender. It should be "male", "female", or "other".'),
  check('address').isString().withMessage('Address is required.'),
  check('email').isEmail().withMessage('Invalid email address.'),
  check('mobile_no').isNumeric().isLength({ min: 10, max: 10 }).withMessage('Invalid mobile number. It should be a 10-digit number.'),
  check('age').isInt({ min: 21, max: 50 }).withMessage('Age must be an integer between 21 and 50.'),
  check('date_of_join').isISO8601().withMessage('Invalid date of join.'),
  check('dept_id').isNumeric().withMessage('Department ID must contain only numbers.'),
  check('dept_name').custom(isValidDeptName).withMessage('Department name should contain only alphabetic characters and spaces.'),
  check('role_id').isNumeric().withMessage('Role ID must contain only numbers.'),
  check('role_name').custom(isValidRoleName).withMessage('Role name should contain only alphabetic characters and spaces.'),
  check('reporting_to_id').isNumeric().withMessage('Reporting-to ID must contain only numbers.'),
  check('inserted_by').isAlpha().withMessage('Inserted by should contain only alphabetic characters.'),
  check('updated_by').isAlpha().withMessage('Updated by should contain only alphabetic characters.'),
  check('is_active_flag').isBoolean().withMessage('Invalid value for is_active_flag.'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
