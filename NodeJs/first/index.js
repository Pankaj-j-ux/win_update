const fs = require('fs');

// fs.mkdirSync('Thapa');

// fs.writeFileSync('Thapa/bio.txt',"I'M PANKAJ SHARMA");

// fs.appendFileSync('Thapa/bio.txt',"AND I'M happy");

// const data = fs.readFileSync('Thapa/bio.txt',"utf-8");
// console.log(data);

// const data = fs.readFileSync('Thapa/bio.txt').toString();
// console.log(data);

// fs.renameSync('Thapa/bio.txt','Thapa/my.txt');

// fs.rmdirSync('Thapa');

// fs.unlink('my.txt',(err)=>{
//     if (err) throw err;
//     console.log("FILE IS DELETED");
// })


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ ASYNC ............

// fs.writeFile('my.txt',"I'M PANKAJ SHARMA",(err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("NEW FILE HAS CREATED");
//     }
// });

const typer = (str) => {
    return `${str} is the String`
}

const name = "Pankaj";

module.exports = {typer, name};