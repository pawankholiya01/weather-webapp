request = require("request");


const weather = (location, callback) => {
    // console.log(location);
    const url = "http://api.weatherstack.com/current?access_key=4f81e6e489634a98002597728d7b4ac3&query=" + location.latitute + ',' + location.longitude;
    // console.log(url);
    request({ url: url, json: true }, (error, response) => {
        // console.log(response);
        if (error) {
            // console.log(" Error can't access API ");
            callback("Error can't access API", undefined);
        }
        else if (response.body.current === undefined) {
            callback("Please Enter a valid Location", undefined);

        }
        else {
            callback(undefined, {
                temprature: response.body.current.temperature,
                weather_despcription: response.body.current.weather_descriptions[0],
                weather_location : response.body.location.name + " " + response.body.location.region + " " + response.body.location.country
            });
            // console.log(" Latitude is : ", response.body.features[0].center[1], "and Longitude is : ", response.body.features[0].center[0]);
        }

    });
}


module.exports = weather;