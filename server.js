const express = require('express');
const app = express();
const port = 3000;


const contactRoute = require('./views/Contact');
const servicesRoute = require('./views/OurServices');
const homeRoute = require('./views/HomePage');

app.use('/homepage', homeRoute);
app.use('/services', servicesRoute);
app.use('/contact', contactRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




// router.get('/', (req, res, next) => {
//     req.time = new Date().toString();
//     next()
// }, (req, res) => {
//         res.json({'time' : req.time})
//     }).listen(port, () => {
//     console.log(`Server started on port ${port}...`)
// });







