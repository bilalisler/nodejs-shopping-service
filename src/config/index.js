const env = process.env.NODE_ENV || 'dev';
module.exports = require(`./environments/${env}`);