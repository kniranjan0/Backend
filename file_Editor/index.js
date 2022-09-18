const fs = require('fs');
const path = require('path');

const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout

})

readline.question('enter hare : ', (str) =>{
    let [type, filename, newName] = str.split(' ');
    if( type === 'read') {
        fs.readFile('./read.txt','utf-8',(err,data)=>{
            if(!err){
                console.log(data);
                return ;
            }
            else{
                console.log(err);
            }
        })
    }
    else if( type === 'create') {
        let str = "hye i am appendFile you weanted to add something"
        fs.appendFile(filename,str, (err) =>{
            if(err) throw err;
            console.log("file added successfully");
        })
    }
    else if( type === 'delete') {
        fs.unlink(filename,(err) =>{
            if(err) throw err;
            console.log("file deleted");
        })
    }
    else if( type === 'rename') {
        fs.rename(filename, newName,((err) =>{
            if(err) throw err;
            console.log("file renamed");
        }))
    }
    else if( type === 'create') {
        fs.open(filename,'w',((err) =>{
            if(err) throw err;
            console.log("file created");
        }))
    }

    else if(type === 'list') {
        
        const red = path.join(__dirname,"index.js");
        fs.readdir("./",(err,file)=>{
            if(err) console.log(err);
            console.log(file[0])
        })
    }
   
})

