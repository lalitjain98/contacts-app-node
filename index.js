const express = require('express')
const path = require('path')
const port = 5000

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'assets')));
var contactList = [
    {
        name: 'Arpan',
        phone: '8763768732'
    },
    {
        name: 'Tony',
        phone: '7949872923'
    },
    {
        name: 'Lalit',
        phone: '2897398743'
    }
]

app.get('/', (req, res)=>{
    return res.render('home', {
        title: 'My Contacts List',
        contacts: contactList
    });
    // res.send(req);
    // res.send("<p>Cool, this is running just fine.</p>")
})
app.get('/practice', (req, res)=>{
    return res.render('practice', {
        title: 'EJS Playground'
    })
})

app.post('/create-contact', (req, res)=>{
    console.log(req.body);
    contactList.push({name: req.body.name, phone: req.body.phone})
    //to redirect to same referrer page pass 'back' as argument
    // return res.redirect('/');
    return res.redirect('back');
})

app.get('/delete-contact/:phone', (req, res)=>{
    let phone = req.params.phone;
    contactList = contactList.filter(item=>item.phone !== phone)
    res.redirect('/');
})

app.listen(port, (err)=>{
    if(err){
        console.log("Error:", err);
        return;
    }
    console.log("Running Express Server on", port);
})