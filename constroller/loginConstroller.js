

var mongoose=require('../public/connectDb');

var bodyParser=require('body-parser');

var urlencodeParser=bodyParser.urlencoded({extended:false});

var userListSchema=new mongoose.Schema({
    userName:String,
    passWord:String
})

var UserList=mongoose.model('UserList',userListSchema);


module.exports=function(app){
    // 解析数据,客户端post方法传过来的数据
    app.use(urlencodeParser);
    app.use(bodyParser.json());

    app.post('/RegisterOrLogin',function(req,res){
        if(!req.body) return false;
        UserList(req.body).save(function(err,data){
            if(err) throw err;
            let successData={data:{code:'0000'}};
            res.json(successData);
        }) 
    })

    app.get('/GetUser',function(req,res){
        UserList.find({},function(err,data){
            if(err) throw err;
            res.json(data.body);
        })
    })
}