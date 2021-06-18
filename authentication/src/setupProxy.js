const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/user',
    createProxyMiddleware({
      target: 'http://192.168.50.151:4000',
      changeOrigin: true,
    })
  );
};