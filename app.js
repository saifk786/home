var express = require('express');
var hbs = require('hbs');
var app = express();
// app.use(express.static(__dirname+'/public'));
// app.get('/public',function (req, res) {
//     res.send('./public')});
// app.use(express.static(__dirname, '/public'));
// app.use(express.static(__dirname+'/public'));
// app.use(express.static(__dirname+'/views'));
app.set('view engine','hbs');
app.get('/',(req,res)=>{
    res.render('home.hbs',{
        pageTitle:'Welcome to shopping website',
        welcomeMsg: '',
        currentYear: new Date().getFullYear()
    });
});
app.get('/ab',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'books',
        currentYear: new Date().getFullYear()
    });
});
app.get('/intro',(req,res)=>{
    res.send('Hello World. .');
});
app.get('/course',(req,res)=>{
    res.send('I am pursuing BSc IT');
});
app.get('/books',(req,res)=>{
    pageTitle:'Welcome to shopping website',{


    var books={
        "maths": "A",
        "english": "O",
        "hindi": "O"
    }
    res.send(books);
});
app.get('/marks',(req,res)=>{
    
        var mark={
            
        }
    res.send("marks are: CAP123: ",mark.CAP123,"CAP219 :",mark.CAP219,"MTH123 :",mark.MTH123);
});
app.get('/att',(req,res)=>{
    var attendence={
       }

    res.send(attendence);
});
app.listen(3000,() => {console.log('server started at port 3000')});