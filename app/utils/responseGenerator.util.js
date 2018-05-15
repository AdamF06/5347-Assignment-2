
function getErrorResponse (err) {
  return {
    success: false,
    error: err
  }
}

function getSuccessResponse (data) {
  return {
    success: true,
    data
  }
}

module.exports = {
  getErrorResponse,
  getSuccessResponse
}