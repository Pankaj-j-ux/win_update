import * as fs from 'fs';

// Synchronous Metthods 
 
try{
    fs.writeFileSync('text.txt',"Welcome to NodeJS Tutorials. This is your boy Pankaj");  // Creating a file. 
    
    fs.appendFileSync('text.txt'," !!!!!!!!!!!!!!!")   // Append data to the existing data.
    
    const buf_data = fs.readFileSync('text.txt');
    // console.log(buf_data);
    const org_data = buf_data.toString();
    console.log(org_data);
    
    fs.unlinkSync('text.txt');

    console.log("SUCCESSFULLY EXECUTED");
}catch(err){
    console.log(err.message);
}


fs.writeFile('text2.txt',"Hii i am pankaj",(err)=>{
    if(err){
        console.log(err.message);
    }console.log("SUCCESSFULL CREATED");
});

fs.readFile('text2.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err.message);
    }console.log(data);
});

fs.mkdir('pj',(err)=>{
    if(err){
        console.log(err.message);
    }
});

fs.unlink('text2.txt',(err)=>{
    if(err){
        console.log(err.message);
    }
});