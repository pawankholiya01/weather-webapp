const request = require("request");
const geocode = require("./geocode")
const weather = require("./forecast")

// const url = "http://api.weatherstack.com/current?access_key=4f81e6e489634a98002597728d7b4ac3&query=37.8267,-122.4233"

// request({ url : url , json : true },(error,response) =>  {
  
//     // console.log(response.body.current);
//     console.log(response.body.current.weather_descriptions[0] +  " The current temprature is : " , response.body.current.temperature , "degree and it feels like " , response.body.current.feelslike,"degree.");

// });



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