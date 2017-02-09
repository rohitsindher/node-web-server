const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
    next();
});
app.use((req,res,next)=>{
    res.render('maintainence.hbs');
});
app.get('/',(req,res)=>{
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        currentYear : new Date().getFullYear(),
        message : 'Welcome to home page'
    });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        currentYear : new Date().getFullYear(),
    });
});

app.listen(3000,()=>{
    console.log('Server is up and running at port number 3000');
});