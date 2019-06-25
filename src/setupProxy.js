const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', { 
        target: 'http://192.168.16.54:8088/hz-finance',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/api": "/"
        },
    })
    )
};