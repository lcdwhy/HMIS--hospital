module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"http://localhost:888",
                pathRewrite:{"^/api":""},
                changeOrigin:true,
                //secure:true
            }
        }
    }
}