// ========== Checkpoint Express Routing ===============

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const app = express();
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
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




// const getCurrentTimeString = () => {
//     return new Date().getTime();
// }

// middleware middleware middleware middleware
// const requestTime = (req, res, next) => {
//     req.time = getCurrentTimeString();
//     next();
// }




//error-handling middleware
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.get('/', (req, res, next) => {
    next(new Error('I am passing you an error!'))
});




// server's listening
app.listen(port, (err) => {
    if(err) {
        console.log('server not running')
    }
    else console.log(`server running on port ${port}`)
});