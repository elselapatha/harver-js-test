const morgan = require('morgan');
const handler = require('finalhandler')

const logger = morgan('dev')

const routes = require('./routes')
const routerUtils = require('./util/router.util.js')

global.rootPath = __dirname

const app = (req, res) => {
    const done = handler(req, res)
    logger(req, res, (err) => {
        if (err) return done(err)
        const requestURL = req.url
        if (routerUtils.match(routes, requestURL)) {
            const route = routerUtils.get(routes, requestURL)
            req.params = routerUtils.params(route, requestURL)
            routes[route](req, res)
        } else {
            routes.static(req, res)
        }
    })
}


module.exports = app;
