//const { Console } = require('console');
const fs=require('fs')
const http=require('http')
const url=require('url')
//const pathname= require('pathname')
//blocking synchronou
// const textIn=fs.readFileSync('./ak.txt','utf-8');
// console.log(textIn)
// // const textOut=`hello this is: ${textIn}.\n created useful ${date.now()}`
// fs.writeFileSync('./output.txt',"fmdkbkfdbm");
// console.log('file written');

// non blocking
// fs.readFile('./start.txt','utf-8',(err,data1)=>{
//     // console.log(data1)
    
//     fs.readFile(`./${data1}.txt`,'utf-8',(err,data2)=>{
// console.log(data2)
// fs.readFile(`./append.txt`,'utf-8',(err,data3)=>{
//     console.log(data3)

//     fs.writeFile('./final.txt',`${data2}\n${data3}`,err=>{
//         console.log('your fole is written')

//     })
// });
// });
// });
// console.log('will read fill');
// server
const server=http.createServer((req,res)=>{
    //console.log(req.url)
    //console.log(req)
    const pathName=req.url
    if(pathName==='/' || pathName==='/overview')
    {
        res.write('this is overview');
        res.end()
    //res.write('hello from the server');
    } 
        else if (pathName==='/product')
    {
        res.write('this is product');
        res.end()
    }   else if(pathName==='/api'){

        fs.readFile(`${__dirname}/package.json`,'utf-8',(err,data)=>{
            const productData=JSON.parse(data)
            console.log(productData);
            res.writeHead(200,{'content-type':'application/json'})
            res.write(data)
            res.end()
        });
        
    }
    else{
        res.writeHead(404)
        res.end('page not found');
    }
    //res.end()
});
server.listen(8081,'127.0.0.1',()=>
{
    console.log('listenig to server')
});



