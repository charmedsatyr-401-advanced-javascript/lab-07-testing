'use strict';

// Mock GET request
const get = url =>
  new Promise((resolve, reject) => {
    switch (url) {
      case '/a':
        resolve('OK');
        break;
      case '/e':
        reject('Unknown url');
        break;
      default:
        reject('Server error');
        break;
    }
  });

module.exports = { get };
