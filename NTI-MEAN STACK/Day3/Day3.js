// Task 1

var arrProcessing=()=>{
    var array=[];

    for(var i=-5; i<5; i++){
        array.push(i);
        console.log("element: ",i);
    }
    
    var posSum=0,total_sum=0;

    for(var element=0; element<array.length;++element){
        if(array[element]>0){
            posSum+=array[element];
        }else{
            continue;
        }
    }

    array.forEach((element)=>{
        total_sum+=element;
    })

    console.log(`The sum of positive numbers: ${posSum}`);
    console.log(`total Sum: ${total_sum}`);

    array.push(10);
    array.shift();

    console.log("New First Element: ",array[0]);
    console.log("Added Element: ",array[array.length-1]);
}

arrProcessing();

console.log("------------------------------ End of Task 1 ---------------------------------------------");


//Task 2 :

var objProcessing=()=>{

    var name=window.prompt("Please Enter your Name");
    var age=window.prompt("Please Enter your age");
    var grade=window.prompt("Please Enter your grade");
    var isGrad=window.confirm("Are you graduate?");

    var studentInfo={
        Name:name,
        Age:age,
        Grade:grade,
        isGraduated:isGrad
    };

    console.log("1-The student's name: ",studentInfo["Name"]);
    console.log("2-The student's age: ",studentInfo["Age"]);
    // console.log("2-The student's name: ",studentInfo.name);
    console.log(`All the properties of the object: ${Object.keys(studentInfo)}`);
    console.log(`All the values of the object: ${Object.values(studentInfo)}`);

    var email=window.prompt("Please Enter your eamil");
    studentInfo["Email"]=email;

    delete studentInfo["isGraduated"];


    for(var element in studentInfo){
        console.log(element+" "+studentInfo[element]);
    }
    
}

objProcessing();

console.log("------------------------------End of Task 2---------------------------------------------");

// Task 3

var simple_student_managment=()=>{

    var studentArray=[];   

    // 1- add some students
    for(var i=0; i<3;++i){
        var name=window.prompt("Please Enter your Name");
        var age=parseInt(window.prompt("Please Enter your age"));
        var grade=window.prompt("Please Enter your grade");
        var isGrad=window.confirm("Are you graduate?");

        var studentInfo={
            Name:name,
            Age:age,
            Grade:grade,
            isGraduated:isGrad
        };

        studentArray.push(studentInfo);
    }

    // 2-Calculate Avarage , Graduates
    var avarageAge=0,noGraduates=0,notGrads=0;
    for(var i=0; i<studentArray.length;++i){
        avarageAge+=studentArray[i].Age;
        if(studentArray[i].isGraduated)noGraduates+=1;
    }
    avarageAge=avarageAge/studentArray.length;
    notGrads=studentArray.length-noGraduates;

    // 3-Use of Object
    for(var i=0; i<studentArray.length;++i){
        console.log(`Student Keys: ${Object.keys(studentArray[i])}`);
        console.log(`Student Values: ${Object.values(studentArray[i])}`);
        console.log();
    }

    //4- Add a new student to the array
    var student={
        Name:"Ahmed",
        Age:24,
        Grade:"A",
        isGraduated:true
    };

    student["Email"]="ahmed@gmail.com";
    studentArray.push(student);



    //5-Delete
    studentArray.forEach((studentInfo)=>{
        delete studentInfo.isGraduated;
    });
    // Display New
    studentArray.forEach((studentInfo,indx)=>{
        for(var element in studentInfo){
            console.log(`${element}: ${studentInfo[element]}`);
        }
    });

    console.log();
    console.log("student names:\n");

    studentArray.forEach((studentInfo)=>{
        console.log("Name: ",studentInfo.Name);
    });

    console.log();
    console.log("Avarge Students Age:",avarageAge);
    console.log("Graduate Students",noGraduates);
    console.log("Non-Graduate Students",notGrads);



}

simple_student_managment();

console.log("------------------------------End of Task 3---------------------------------------------");



