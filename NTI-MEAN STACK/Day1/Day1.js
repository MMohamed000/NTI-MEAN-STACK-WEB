console.log("                     Task 1:Using console.log() and Variables                  ");
console.log();

//1-Creating Premiative Variables of diffrant types
var str  = "Moamen Mohamed Abd Elrazik";
var num  = 10;
var flag = (true && false) || true;
var nVal = null;
var und  = undefined;

//2-using console.log() to print them
console.log("Name: "+str);
console.log("Numerical Variable: "+num);
console.log("Boolean Variable: "+flag);
console.log("NUll Variable: "+nVal);
console.log("Undefined Variable: "+und);

console.log("------------------------------");

//3-using Typeof
console.log("Typeof Name: "+typeof str);
console.log("Numerical Variable: "+typeof num);
console.log("Boolean Variable: "+typeof flag);
console.log("NUll Variable: "+typeof nVal);
console.log("Undefined Variable: "+typeof und);

//4-Concatenate
var firstName = "Moamen";
var secondName= "Mohamed Abd Elrazik";
var fullName  = firstName+" "+secondName;
console.log("FullName: "+fullName);
fullname=`${firstName} ${secondName}`;
console.log("FullName: "+fullName);

console.log("-----------------------------------------------------------------");
console.log("               Task 2:Working with Data and basic Validation             ");
console.log();



function Validation(){
  event.preventDefault();
  var Username=document.getElementById("Username").value;
  var Password=document.getElementById("Password").value;
  
  if(Username.length==0){
    alert("UserName is required");
  }else if(Password.length<8){
    alert("Password must be at least 8 characters");
  }else{
    console.log(`UserName: ${Username} \nPassword: ${Password}`);
  }
}