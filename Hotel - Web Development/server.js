const express = require('express')
const admin = require('firebase-admin')
const bcrypt = require('bcrypt')
const path = require('path')

//declear static path
let staticPath = path.join(__dirname, "public")

// initialing express.js
const app = express();

//middleware
app.use(express.static(staticPath));


///all route starte from here
//homeroute
app.get("/", (req,res)=> {
    res.sendFile(path.join(staticPath, "index.html"));
})

//signup route
app.get('/signup', (req,res) =>{
    res.sendFile(path.join(staticPath, "signup.html"));

})
//reservation route
app.get('/reservation', (req,res) =>{
    res.sendFile(path.join(staticPath, "reservation.html"));

})

//404 route
app.get('/404', (req,res)=>{
    res.sendFile(path.join(staticPath, "404.html"));
})
app.use((req,res)=>{
    res.sendFile(path.join(staticPath, "404.html"));
})

app.listen(3000, ()=>{
    console.log(('listening on port 3000'))
})