const express = require('express')
const app = express()

const port = 3000

app.use(express.static("/home/hemant/Intern-Project/site-server-files"))

app.set('view engine','pug')

app.get('/',function(req, res){
    res.sendFile('site-server.html',{root:__dirname})
});

app.listen(port,()=> console.log("working on port 3000")) 
