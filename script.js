// current date
let date = new Date();


function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}

 kabulval=convertTZ(date, "Asia/Kabul");

 Hours = kabulval.getHours();
 Minutes=kabulval.getMinutes();
 HandM= "Current time in India is 7 minutes less than "
            +  Hours + ' Hours and ' + Minutes+ ' Minutes.'  ;
 document.getElementById("demo1").innerHTML = HandM;
