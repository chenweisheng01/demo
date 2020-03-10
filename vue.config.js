module.exports = {
    lintOnSave: false,
    devServer: {
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
}