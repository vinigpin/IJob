const sanitize = require("mongo-sanitize");


function sanitizeObject(obj) {
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    const novoObj = {};
    for (const key of Object.keys(obj)) {
      novoObj[key] = sanitizeObject(obj[key]);
    }
    return novoObj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => sanitizeObject(item));
  }

  return sanitize(obj);
}

module.exports = sanitizeObject;