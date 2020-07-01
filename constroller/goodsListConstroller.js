var mongoose=require('../public/connectDb');
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false});

// 创建表模板
var goodlistSchema=new mongoose.Schema({
    goodImg:String,
    goodName:String,
    goodPrice:Number,
    goodDes:String
})

var goodList=mongoose.model('goodList',goodlistSchema);

module.exports=function (app){
    	// 解析调用express的post时传过来的数据
	app.use(urlencodedParser);
    app.use(bodyParser.json());
    
    app.get('/goodlist',function(req,res){
        goodList.find({},function(err,data){
            if(err) throw err;
            res.json(data);
        })
    })

    app.post('/goodlist',function(req,res){
        goodList(req.body).save(function(err,data){
            if(err) throw err;
            let successData={data:{code:'0000'}}
            res.json(successData);
        })
    })
}