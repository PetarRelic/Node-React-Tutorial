//this is newer version of proxying , instead of older version of proxying in package.json as a object
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
    app.use(proxy('/api/*', { target: 'http://localhost:5000' }));
};