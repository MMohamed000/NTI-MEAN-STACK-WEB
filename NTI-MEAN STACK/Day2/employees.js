class employee{
    #name;
    #age;
    #experienceYears;
    #selfRating;
    constructor(name,age,exp){
        this.#name=name;
        this.#age=age;
        this.#experienceYears=exp;
    }
    setRate(rate){
        if(rate>=1 && rate<=10){
            this.#selfRating=rate;
            return true;
        }else{
            alert("Incorret Rate Number fron 1 to 10 exclusively");
            return false;
        }
    }
    getRate(){
        return this.#selfRating;
    }
    getName(){
        return this.#name;
    }
    getAge(){
        return this.#age;
    }
    getExp(){
        return this.#experienceYears;
    }
}

var emp=null;

var addNewEmployee=()=>{
    var employeeName=document.getElementById("Name").value;
    var employeeAge=document.getElementById("Age").value;
    var employeeExp=document.getElementById("Years").value;
    var emp_selfRating=prompt("Rate yourself from 1 to 10 ");

    emp=new employee(employeeName,employeeAge,employeeExp);
    while(!emp.setRate(emp_selfRating)){
        emp_selfRating=prompt("Rate yourself from 1 to 10 ");
    }
    emp.setRate(emp_selfRating);

    console.log(`Name:${emp.getName()}`);
    console.log(`Age:${emp.getAge()}`);
    console.log(`Exp:${emp.getExp()}`);
    console.log(`Rate:${emp.getRate()}`);
}

var jobCategory=()=>{
    exp=emp.getExp();
    let cat;

    if(exp<2){
        cat="Junior";
    }else if(exp>=2 && exp<=5){
        cat="Mid-Level";
    }else if(exp>=5 && exp<=10){
        cat="Senior";
    }else{
       cat="Expert"; 
    }

    console.log(`Job Category: ${cat}`);
    return cat;
}

var Performance_Level=()=>{
    rate=parseInt(emp.getRate());
    let level;

    switch(rate){
        case 10:
        case 9:
            level = "Excellent";
            break;
        case 8:
        case 7:
            level = "Good";
            break;
        case 6:
        case 5:
            level = "Average";
            break;
        default:
            level = "Needs Imporvment";
    }
    console.log(`Performance_Level: ${level}`);
    return level;
}

var Salary_Calculation=()=>{
    exp=emp.getExp();
    var bouns=0,salary=10000;

    if(exp>=0 && exp<=2){
        bouns+=(salary*0.1);
    }else if(exp>=3 && exp<=5){
        bouns+=(salary*0.15);
    }else{
        bouns+=(salary*0.2);
    }

    salary+=bouns;
    console.log(`Salary: ${salary}`);
    return salary;

}

var Shift_Calculation=()=>{
    date=new Date().getHours();
    let shift;
    if(date>=9 && date<=18){
        shift="day shift.";
    }else{
        shift="neight shift.";
    }
    console.log("Shift:",shift);
    return shift;
}

var Run=()=>{

    addNewEmployee();

    var newWindow=window.open();

    var Category=jobCategory();
    var level=Performance_Level();
    var salary=Salary_Calculation();
    var shift=Shift_Calculation();

    newWindow.document.write(`
        <h1 style="font-family: Arial; font-size: 28px;">1 - Employee Data</h1>
        <div style="font-size: 20px; font-family: Verdana; margin: 10px 0;">Name: ${emp.getName()}</div>
        <div style="font-size: 20px; font-family: Verdana; margin: 10px 0;">Age: ${emp.getAge()}</div>
        <div style="font-size: 20px; font-family: Verdana; margin: 10px 0;">Experience Years: ${emp.getExp()}</div>
        <div style="font-size: 20px; font-family: Verdana; margin: 10px 0;">Rate: ${emp.getRate()}</div>
    `);

    newWindow.document.write(`
        <h1 style="font-family: Arial; font-size: 28px;">2 - Employee Job Category:</h1>
        <div style="font-size: 20px; font-family: Verdana; margin: 10px 0;">Category: ${Category}</div>
    `);

    newWindow.document.write(`
        <h1 style="font-family: Arial; font-size: 28px;">3- Employee Performance Level:</h1>
        <div style="font-size: 20px; font-family: Verdana; margin: 10px 0;">Performance Level: ${level}</div>
    `);

    newWindow.document.write(`
        <h1 style="font-family: Arial; font-size: 28px;">4- Employee Salary:</h1>
        <div style="font-size: 20px; font-family: Verdana; margin: 10px 0;">Salary: ${salary}$</div>
    `);

    newWindow.document.write(`
        <h1 style="font-family: Arial; font-size: 28px;">5- Employee Work Shift Time:</h1>
        <div style="font-size: 20px; font-family: Verdana; margin: 10px 0;">Time: ${shift}</div>
    `);

}

