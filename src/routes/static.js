const path = require('path');
const responseUtils = require('../util/response.util.js')

module.exports = (req, res) => responseUtils.render(res, path.join(rootPath, 'public', req.url))