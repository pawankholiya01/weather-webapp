const request = require("request");
const geocode = require("./geocode")
const weather = require("./forecast")


geocode("Pithoragarh",(error,response)=>{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(response);
        weather({ latitute: response.latitute, longitude: response.longitude }, (error, response) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(response);
            }

        })
    }
})