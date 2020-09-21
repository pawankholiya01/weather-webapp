// setTimeout(()=>{

//     console.log("2 second's up");

// },2000);


// const geocode =  (location,callback)=>{

//     setTimeout( () => {
//         var data = 99;
//         // console.log(data);
//         callback(data);

//     }, 2000);

// }
// geocode("pawan",(val)=>{

//     console.log(val);
// });

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (x,y,callback)=>{
    const sum = x+y;

    setTimeout((sm)=>{
        // console.log(sum)
        callback(sm);
    },2000,sum);


}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})