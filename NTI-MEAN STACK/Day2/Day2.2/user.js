// Step 1: Ask The User For
var name=prompt("Enter your name: ");
var birthyr=prompt("Enter your birth year");
var isStudent=confirm("Are you a student?");

// Step 2: Process the input:

currDate=new Date().getFullYear();
userAge=currDate-birthyr;

var categorizeAge;
if(userAge<13){
    categorizeAge="Kid";
}else if(userAge>=13 && userAge<=17){
    categorizeAge="Teen";
}else if(userAge>=18 && userAge<=59){
    categorizeAge="Adult";
}else{
    categorizeAge="Senior";
}

// Step 3: Show the output:

console.log(`Hello ${name},you are ${userAge} years old\nCategory:${categorizeAge}`);
console.log(isStudent?"Don't forget to study hard!":"");

alert(`Hello ${name},you are ${userAge} years old\nCategory:${categorizeAge}`,isStudent?"Don't forget to study hard!":"");

document.getElementById("info").innerHTML += `
    <strong>Hello ${name}, you are ${userAge} years old.</strong><br>
    <strong>Category: ${categorizeAge}</strong><br>
    <strong>${isStudent ? "Don't forget to study hard!" : ""}</strong>
`;
