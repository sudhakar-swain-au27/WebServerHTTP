const http = require('http');

const PORT = 3000;



const server = http.createServer((req , res)=>{
    res.writeHead(200 ,{
        'content-type': 'application/json',
    });
    res.end(JSON.stringify({
        id : 1,
        name : 'Sir Isaac Newton',

    }));
});
server.listen(PORT,()=>{
    console.log(`listening on port' ${PORT}.......`)
});