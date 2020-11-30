var age = 25;
var date = new Date();
let findYear=(d)=>{
    var output = d.getFullYear();
    console.log(output - age);
    if(output-age < 2000){
        console.log("Gettin old!");
    } else {
        console.log("And the younglings too!")
    }
}; findYear(date);