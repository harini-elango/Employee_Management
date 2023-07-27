const handleSuccessResponse = (res, data, statusCode = 200) => {
  const response = {
    success: true,
    data,
  };
  res.status(statusCode).json(response);
};

const handleErrorResponse = (res, errorMessage, statusCode = 500) => {
  const response = {
    success: false,
    error: errorMessage,
  };
  res.status(statusCode).json(response);
};

export {
  handleSuccessResponse,
  handleErrorResponse
};
