let http = require("http");
let fs = require("fs")

let port=8001

const requestHandler = (req,res)=>{
    console.log(req.url);

    fs.readFile("./index.html",function(err,data){
        if(err)
        {
            console.log(err);
        }
        res.end(data);
    });
    
}
const server = http.createServer(requestHandler)

server.listen(port,(err)=>{
    if(err)
    {
        console.log(err);
        return false;
    }

    console.log("server is running");
    
})