// vue.config.js
module.exports = {
    devServer: {
        open:false, //自动打开浏览器页面
        proxy: {
            '/api': {
                target: 'https://translate.yandex.net', //对应自己的接口
                ws:true,
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': '' //需要重写路径，
                }
            }
        }

    }
}

