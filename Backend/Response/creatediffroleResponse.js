export const handleSuccessResponse = (res, data, statusCode) => {
  res.status(statusCode).json({ success: true, data });
};

export const handleErrorResponse = (res, message, statusCode) => {
  res.status(statusCode).json({ success: false, error: message });
};
