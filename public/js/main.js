console.log("calling api")

fetch('http://localhost:3000/weather?address=khatima',{ headers : {
    'Accept': 'application/json'
}}).then((response)=>{
    console.log(response)
    response.json().then((data)=>{
        if(data.error)
        {
            console.log(data.error)
        }
        console.log(data)
    })
});