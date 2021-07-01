const express=require ('express');
const dataservice=require("./service/dataservice");
const app =express();
const cors = require('cors')
const session=require('express-session')
app.use(express.json());
app.use(session({
    secret:'randomsecuritystring',
    resave:false,
    saveUnlimited:'false'
}))

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));


app.listen(4000,()=>{console.log("server started at port 4000")})


app.get('/',(req,res)=>{res.send("this is a get method")})

app.post('/save' ,(req,res)=>{
    dataservice.save(req.body.todoevent)
    .then(result => (res.status(result.statusCode).json(result)))
})

app.get('/showtodo',(req,res)=>{
    dataservice.showtodo()
    .then(result=>(res.json(result)))
})

app.get('/showcompleted',(req,res)=>{
    dataservice.showcompleted()
    .then(result=>(res.json(result)))
})

app.patch('/updatealltodo',(req,res)=>{
    dataservice.updatealltodo(req.body.fi,req.body.si,req.body.fivalue,req.body.sivalue)
    .then(result => (res.status(result.statusCode).json(result)))
})

app.put('/aftersorttodolist',(req,res)=>{
    dataservice.aftersorttodolist(req.body.todolist,req.body.completelist)
    .then(result => (res.json(result)))
})
app.post('/register',(req,res)=>{
    dataservice.register()
    .then(result => (res.status(result.statusCode).json(result)))
})

app.patch('/updateCompleted',(req,res)=>{
    dataservice.updateCompleted(req.body.fi,req.body.si,req.body.fivalue,req.body.sivalue)
    .then(result => (res.status(result.statusCode).json(result)))
})
// app.patch('/deletealltodo',(req,res)=>{
// dataservice.deletealltodo(req.body.arrayind)
// .then(result => (res.status(result.statusCode).json(result)))
// })