// current date
let date = new Date();


function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}

 kabulval=convertTZ(date, "Asia/Kabul");


document.getElementById("demo").innerHTML = kabulval;


// toLocaleTimeString()
// // 1672461086164

// date.toLocaleTimeString();
// // 10:37:35 PM

// date.toUTCString()
// Sat, 31 Dec 2022 04:45:19 GMT