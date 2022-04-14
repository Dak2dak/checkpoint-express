// ========== Checkpoint Express Routing ===============

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
// const req = require('express/lib/request');
// const res = require('express/lib/response');

const app = express();
const port = 3000;

// sets the view engine to EJS
app.set('view engine', 'ejs');

// directs Express to the public folder for stylesheets
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/services', (req, res) => {
    res.render('services')
});

app.get('/contact', (req, res) => {
    res.render('contact')
});

app.listen(port, (err) => {
    if(err) {
        console.log('server not running')
    }
    else console.log(`server running on port ${port}`)
});