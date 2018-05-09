var express = require("express");
var bodyParser =require('body-parser');
var app = express();


// tell the program to use body parser:

app.use(bodyParser.urlencoded({ extended: true }));


var quotes = [
        'Life isnt about finding yourself. Life is about creating yourself.' ,
      
        
        'In the end, its not the years in your life that count. Its the life in your years' ,
        

         'Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else'
        ]; 

app.get('/', function(req, res){
    res.render('home');
    
});

app.get('/quotes', function(req, res){
    res.render('quotes', { quotes: quotes });
    
});

app.post('/addquote', function(req, res){
    var newTought = req.body.tought;
    quotes.push(newTought);
    res.redirect('/quotes');
    
});





app.listen(process.env.PORT, process.env.ID, function(){
    console.log('server: so far so good....');
    
});


app.set('view engine', 'ejs');