module.exports = {
    '/api/task/:id': require('./routes/api'),
    '/': require('./routes/index'),
    'static': require('./routes/static')
}