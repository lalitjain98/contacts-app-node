const express = require('express')
const path = require('path')
const port = 5000

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res)=>{
    return res.render('home');
    // res.send(req);
    // res.send("<p>Cool, this is running just fine.</p>")
})



app.listen(port, (err)=>{
    if(err){
        console.log("Error:", err);
        return;
    }
    console.log("Running Express Server on", port);
})