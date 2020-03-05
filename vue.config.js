module.exports = {
    lintOnSave: false,
    open: true,
    port: 8080,
    https: false,
    proxy:{
        '/api': {
            target: 'http://d.apicloud.com/mcm/api',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
}