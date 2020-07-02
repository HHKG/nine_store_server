var express=require('express');
var goodsListConstroller =require('./constroller/goodsListConstroller');
var loginConstroller =require('./constroller/loginConstroller');
var app=new express();

// 解决跨域问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

app.use(express.static('public'));

goodsListConstroller(app);
loginConstroller(app);


app.listen(3333);