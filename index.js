const express = require('express')
const path = require('path')
const port = 5000
const db = require('./config/mongoose')
const Contact = require('./models/Contact');

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

    Contact.find({}, (err, data)=>{
        if(err){
            console.log("Error Fetching Documents", err);
            return;
        }
        return res.render('home', {
            title: 'My Contacts List',
            contacts: data
        });    
    })

    // return res.render('home', {
    //     title: 'My Contacts List',
    //     contacts: contactList
    // });
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
    Contact.create({
        name: req.body.name, 
        phone: req.body.phone
    }, (err, data)=>{
        if(err){ console.log('Error creating Contact', err); return;}
        console.log(data);
        return res.redirect('back');
    });


    // contactList.push({name: req.body.name, phone: req.body.phone})
    //to redirect to same referrer page pass 'back' as argument
    // return res.redirect('/');
    // return res.redirect('back');
})

app.get('/delete-contact/:id', (req, res)=>{
    let id = req.params.id;
    
    Contact.deleteOne({_id: id}, (err, data)=>{
        if(err){
            console.log("Error deleting item", err);
            return;
        }
        console.log(data)
        res.redirect('back');
    });
    
    //contactList = contactList.filter(item=>item.phone !== phone)
    //res.redirect('/');
})

app.listen(port, (err)=>{
    if(err){
        console.log("Error:", err);
        return;
    }
    console.log("Running Express Server on", port);
})