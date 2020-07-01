var mongoose=require('mongoose');

// 连接数据库
mongoose.connect('mongodb+srv://todoapp:todoapp@cluster0-w2o0w.mongodb.net/test?retryWrites=true&w=majority',{useUnifiedTopology: true,useNewUrlParser: true});

// 暴露方法
module.exports=mongoose;