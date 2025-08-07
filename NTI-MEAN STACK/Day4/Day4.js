(()=>{
    document.body.innerHTML+='<h1>Day 4 Task</h1>';
})();


function multiply(a,b){
    var result=a*b;
    return result;
}

function calculate(a,b,multiply){
    return multiply(a,b);
}

function displayResult(result){
    console.log(result);
}

var result=calculate(2,5,multiply);

displayResult(result);


setTimeout(()=>{
    console.log("Hello, User!");
}
,1000);

var count = 10;
var intervalId = setInterval(() => {
    console.log(count);
    count-=1;
    if (count===0){
        console.log("Time's up!");
    }
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 5000);


var doWork=setTimeout(()=>{
    console.log("This will be cleared!");
},5000);
clearTimeout(doWork);



