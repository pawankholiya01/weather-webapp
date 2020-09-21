const request = require("request");

// const url = "http://api.weatherstack.com/current?access_key=4f81e6e489634a98002597728d7b4ac3&query=37.8267,-122.4233"

// request({ url : url , json : true },(error,response) =>  {
  
//     // console.log(response.body.current);
//     console.log(response.body.current.weather_descriptions[0] +  " The current temprature is : " , response.body.current.temperature , "degree and it feels like " , response.body.current.feelslike,"degree.");

// });


const weather = (location, callback) => {
    console.log(location);
    const url = "http://api.weatherstack.com/current?access_key=4f81e6e489634a98002597728d7b4ac3&query=" + location.latitute + ',' + location.longitude;
    console.log(url);
    request({ url: url, json: true }, (error, response) => {
        // console.log(response);
        if (error) {
            // console.log(" Error can't access API ");
            callback("Error can't access API", undefined);
        }
        else if (response.body.current === undefined) {
            callback("Please Enter a valid Location", undefined);
            console.log(response.body);

        }
        else {
            callback(undefined, {
                temprature: response.body.current.temperature,
                weather_despcription: response.body.current.weather_descriptions[0]
            });
            // console.log(" Latitude is : ", response.body.features[0].center[1], "and Longitude is : ", response.body.features[0].center[0]);
        }

    });

}
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





const geocode = (address,callback) => {
const mapurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURI(address)  + ".json?access_token=pk.eyJ1IjoicGF3YW5raG9saXlhMDEiLCJhIjoiY2tmOWRpMDFzMGwxbDJ6cXNiODNzODRxZyJ9.fF030x7YhuJQQ5JoQpts5A&limit=1"
request({ url: mapurl, json: true }, (error, response) => {
    // console.log(response);
    if(error)
    {
        // console.log(" Error can't access API ");
        callback("Error can't access API", undefined );
    }
    else if (response.body.features===undefined){
        callback("Please Enter a valid Address", undefined);
        // console.log(" Please enter a valid search text ");
    }
    else{
        callback( undefined, {
            latitute: response.body.features[0].center[1],
            longitude: response.body.features[0].center[0]
        });
        // console.log(" Latitude is : ", response.body.features[0].center[1], "and Longitude is : ", response.body.features[0].center[0]);
    }

});

}

geocode("Khatima",(error,response)=>{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(response);
    }

})