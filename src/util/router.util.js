const Path = require('path-parser').default
module.exports = {
    match: (routes, url) => Object.keys(routes).some(key => new Path(key).test(url)),
    get: (routes, url) => Object.keys(routes).find(key => new Path(key).test(url)),
    params: (route, url) => new Path(route).test(url)
}