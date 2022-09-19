const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

app.use(express.json());

app.get("/*",(req,res)=> {

    const url = req.originalUrl

     if(url === "/favicon.ico") 
        return res.send()
        
    const curPath = "." + url
    let fileStat = fs.statSync(curPath)

    if(fileStat.isFile()) {
        fs.readFile(curPath, "utf8", function(err, data) { 
            if(err)
                return res.send("Failed to read file due to " + err);
            res.send(data)

        })
    }
    else if(fileStat.isDirectory()) {
        fs.readdir(curPath, (err,file)=>{
            if(err) throw err;
            var response = "<ul>"
            file.forEach((e)=> {
                var filePath = ""
                if(url.endsWith("/"))
                    filePath = url + e
                else 
                    filePath = url + "/" + e    
                response += `<li><a href=${filePath} >${e}</a></li>`
            })
            response += "</ul>"
            res.send(response)
        })
    }
    else {
        res.send("404 Not Found")
    }
    })



app.listen(8080, ()=>{
    console.log("server listening on port 8080")
})