const express = require('express')
const port = 5000

const app = express();


app.get('/', (req, res)=>{
    // res.send(req);
    res.send("<p>Cool, this is running just fine.</p>")
})



app.listen(port, (err)=>{
    if(err){
        console.log("Error:", err);
        return;
    }
    console.log("Running Express Server on", port);
})