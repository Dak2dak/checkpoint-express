const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('views/HomePage');
});


app.get('/services', (req, res) => {
    res.render('views/OurServices');
});


app.get('/contact', (req, res) => {
    res.render('views/ContactUs');
})


app.listen(port, (err) => {
    if(err) {
        console.log('server not running')
    }
    else console.log(`server running on port ${port}`)
});




// router.get('/', (req, res, next) => {
//     req.time = new Date().toString();
//     next()
// }, (req, res) => {
//         res.json({'time' : req.time})
//     }).listen(port, () => {
//     console.log(`Server started on port ${port}...`)
// });






// npm install express-ejs-layouts




