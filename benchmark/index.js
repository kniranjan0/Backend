const http = require('http');
const fs = require('fs')
const promises = require('fs/promises');

const server = http.createServer(function(req, res) { 
    if(req.method === 'GET') {
        if(req.method === 'GET' && req.url == '/'){
            res.end("tototo")
        }
        else if(req.method=== 'GET' && req.url === '/textsync'){
           
            let file = fs.readFileSync('./read.txt',{encoding:"utf8"})
                res.end(file)
        }
        else if(req.method === 'GET' && req.url === '/textasync'){
            fs.readFile("./read.txt",'utf-8',(err, data) => {
                if(err) res.end("err due to " + err)   
                res.end(data);
            })
        }
        else if(req.method === 'GET' && req.url === '/textstream'){
           let stream = fs.createReadStream('./read.txt')
           stream.pipe(res)
        //    steam.on('data',(data)=>{
        //         let chunk = data.toString();
        //         res.end(chunk);
        //    })
        }
        else if(req.method === 'GET' && req.url === '/textpromises'){
            async function data(){
                await fs.readFile("./read.txt",'utf-8',(err, data) =>{
                    if(err) res.end("err due to " + err) ;
                    res.end(data);
                })
            }
            data()
        }
        else{
            res.end("note found")
        }
        
    }
})



server.listen(8000);