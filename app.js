var count = 0;
let counter = document.getElementById("countNum");
let m1 = document.getElementById("m1");
let m5 = document.getElementById("m5");
let m10 = document.getElementById("m10");
let p1 = document.getElementById("p1");
let p5 = document.getElementById("p5");
let p10 = document.getElementById("p10");

m1.onclick = function(){decreaseCount(1)};
m5.onclick = function () { decreaseCount(5) };
m10.onclick = function () { decreaseCount(10) };
p1.onclick = function () { increaseCount(1) };
p5.onclick = function () { increaseCount(5) };
p10.onclick = function () { increaseCount(10) };

let increaseCount=(num)=>{
    count+=num; 
    updateCounter(count);
};

let decreaseCount=(num)=>{
    count-=num;
    updateCounter(count);
};

let updateCounter=(num)=>{
    counter.innerText = num;
}