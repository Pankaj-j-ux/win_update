const fs = require('fs');
const http = require('http');

const myAPI = [
    {
        name : 'Pankaj',
        Age :  20
    },
    {
        name : 'Taashi',
        age : 19
    },
    {
        name : 'Mayank',
        Age :  19
    },
    {
        name : 'Krishna',
        Age :  20
    },
    {
        name : 'Kanwalpreet',
        Age :  19
    },
    {
        name : 'Charu',
        Age :  19
    },
    {
        name : 'Lakshy',
        Age :  20
    },
    {
        name : 'Pranshu',
        Age :  20
    },
    {
        name : 'Punit',
        age : 26
    },
    {
        name : 'Nishtha',
        age : 19
    }
]

fs.writeFile('./myapi.json',JSON.stringify(myAPI),(err)=>{
    if (err) throw err;
});

http.createServer((req, res)=> {

    if(req.url === "/"){
        res.end('hello world');
    }else if(req.url === "/home"){
        res.end('hello world from home');
    }else if(req.url === "/myapi.json"){ 
        fs.readFile(`${__dirname}/myapi.json`,'utf-8',(err, data)=>{
            if(err) throw err;
            res.end(data);
        });
    }else if(req.url === "/contactus"){
        res.end('hello world from contactus');
    }else {
        res.end('hello');
    } 
}).listen(9000, '127.0.0.1', () =>{
    console.log("LISTENING TO THE PORT NO. 8000");
});