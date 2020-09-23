const request = require("request");


const geocode = (address, callback) => {
    const mapurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURI(address) + ".json?access_token=pk.eyJ1IjoicGF3YW5raG9saXlhMDEiLCJhIjoiY2tmOWRpMDFzMGwxbDJ6cXNiODNzODRxZyJ9.fF030x7YhuJQQ5JoQpts5A&limit=1"
    request({ url: mapurl, json: true }, (error, response) => {
        // console.log(response);
        if (error) {
            // console.log(" Error can't access API ");
            callback("Error can't access API", undefined);
        }
        else if (response.body.features === undefined) {
            callback("Please Enter a valid Address", undefined);
            // console.log(" Please enter a valid search text ");
        }
        else {
            callback(undefined, {
                latitute: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                place_name: response.body.features[0].place_name
            });
            // console.log(" Latitude is : ", response.body.features[0].center[1], "and Longitude is : ", response.body.features[0].center[0]);
        }

    });

}

module.exports = geocode;