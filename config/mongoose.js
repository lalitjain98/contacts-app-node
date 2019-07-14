const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contact_list_db', {useNewUrlParser: true});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error Connecting to DB'))
db.once('open', ()=>{
    console.log('Successfully Connected to Database!')
})