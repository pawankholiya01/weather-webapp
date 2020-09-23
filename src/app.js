const path = require('path');

const express = require('express');
const hbs = require('hbs');
const app = express();

const geocode = require("./utils/geocode")
const weather = require("./utils/forecast")

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

app.get('/weather', (req, userRes) => {

    // console.log(req.query);

    if(!req.query.address)
    {
        return userRes.send({error:"Please Provide an Address"});
    }

    geocode(req.query.address, (error, res) => {
        if (error) {
            console.log(error);
            return userRes.send({error});
        }
        else {
            console.log(res);
            weather({ latitute: res.latitute, longitude: res.longitude }, (error, response) => {
                if (error) {
                    console.log(error);
                    return userRes.send({error});
                }
                else {
                    console.log(response);
                    return userRes.send({weather : response, user_location :res.place_name});
                }

            })
        }
    })


    // res.send({
    //     title : "weather-app",
    //     name : "Pawan",
    //     address: req.query.address
    // });
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