'use strict';

const next = (err, result) => {
  if (err) {
    throw new Error(err);
  } else {
    return result;
  }
};

module.exports = next;
