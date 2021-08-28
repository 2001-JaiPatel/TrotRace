const axios = require('axios');

exports.getInstance = (options) => axios.create(options);

exports.request = ({ url, data, method = 'get' }) => axios({ method, url, data });