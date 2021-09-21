// imported modules and file 
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Variables
const port = process.env.PORT || 3000;

// Paths .....................
const staticPath = path.join( __dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
const partial_path = path.join(__dirname, "../templates/partials"); 


app.set('view engine', 'hbs');
app.set('views', template_path);

hbs.registerPartials(partial_path);

app.use(express.static(staticPath));



// Routing 
app.get('',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/weather',(req,res)=>{
    res.render('weather');
});

app.get('*',(req,res)=>{
    res.render('404',{
        errMsg : 'Oops! Page not found.'
    });
});

app.get('/about/*',(req,res)=>{
    res.render('404',{
        errMsg : 'Oops!!!!!!'
    });
});

// Listening to port 3000
app.listen(port,()=>{
    console.log(`Listening to port NO. ${port}`);
});