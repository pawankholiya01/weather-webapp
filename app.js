const request = require("request");
const geocode = require("./geocode")
const weather = require("./forecast")
weather({
    latitute : 0,
    longitude : 0

}, (error, response) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(response);
    }

})

geocode("Khatima",(error,response)=>{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(response);
    }

})