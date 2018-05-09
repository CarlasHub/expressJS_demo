var express = require('express');
var app = express();

app.use(express.static("public"));



app.get("/" , function(req, res){
    res.render('index');
});
app.get('/learninghowto/:thing', function(req,res){
    var thing = req.params.thing;
    res.render('learninghowto', { varRandom: thing });
    
});

app.get('/posts', function(req,res){
    var posts = [
        {title: 'once upon time'}, {author: 'Carla Goncalves'},
        {title: 'once upon time'}, {author: 'Carla Goncalves'},
        {title: 'once upon time'},  {author: 'Carla Goncalves'}
        ];
    res.render('posts', { posts: posts});
    
});

//environment variables with call back
app.listen(process.env.PORT, process.env.IP, function(){
 console.log('server is listening');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

