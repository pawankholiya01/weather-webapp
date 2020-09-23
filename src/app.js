const path = require('path');

const express = require('express');
const hbs = require('hbs');
const app = express();


const publicDir = path.join(__dirname,'../public');
const viewDir = path.join(__dirname, '../templates/views');
const partialsDir = path.join(__dirname, '../templates/partials');


hbs.registerPartials(partialsDir);
app.set('view engine','hbs');
app.set('views', viewDir)

app.use(express.static(publicDir));

app.get('/', (req, res) => {
    res.render('index',{ 
        title : "Weather App",
        name : "Pawan"
     })
})
app.get('/about', (req, res) => {
    res.render('index', {
        title: "About PAge",
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help! PAge",
    })
})

app.get('/weather', (req, res) => {

    // console.log(req.query);

    if(!req.query.address)
    {
        return res.send("Please Provide an Address");
    }
    res.send({
        title : "weather-app",
        name : "Pawan",
        address: req.query.address
    });
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        message: "Help Page Not Found!",
    })
})


app.get('*', (req, res) => {
    res.render('error', {
        message: "Page Not Found!",
    })
})


app.listen(3000,()=>{
    console.log("Server Started on port 3000");
});