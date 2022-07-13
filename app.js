const fs= require('fs');
const express= require('express');
const app= express()
//middleware
app.use(express.json());
// app.get('/',(req,res)=>{
//    // res.send('hello devlopment side');
//    //res.status(200).send('hello devlopment side');
//     //res.status(200).json({massage:'hello everyone',app:'javatpoint'})
//     res.status(404).json({massage:'hello everyone',app:'javatpoint'})
// })
// app.post('/',(req,res)=>{
//     res.send('you can post at.....')
// })
const tours=JSON.parse(fs.readFileSync(`${__dirname}/package.json`)
);
// get method
app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json({
        status:'sucess',
        results:tours.length,
        data:{
            tours
        }
    })
    
});
//post method
app.post('/api/v1/tours',(req,res)=>{
// const newId=tours[tours.length-1].id+1;
// const newTour=Object.assign({id:newId},req.body);

// tours.push(newTour);
// fs.writeFile(`${__dirname}/package.json`,JSON.stringyfy(tours),err=>{
// res.status(200).json({massage:'success',data:{tour:newTour}})
//});
console.log(req.body);
res.send('ok')
});
const port=5005;
app.listen(port,()=>{
    console.log(`app running on ${port}.....`);
})
