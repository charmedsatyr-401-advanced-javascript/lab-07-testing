'use strict';

// Mock RESPONSE
const response = result => {
  const obj = { status: 500 };
  switch (result) {
    case 'OK':
      obj.status = 200;
      return obj;
    case 'unknown':
      obj.status = 404;
      return obj;
    default:
      return obj;
  }
};

module.exports = response;
