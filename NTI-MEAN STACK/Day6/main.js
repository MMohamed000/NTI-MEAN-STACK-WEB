let arrayList=[];
let i=1;


let create=(obj)=>{
    arrayList.push(obj);
    localStorage.setItem("LocalProducts",JSON.stringify(arrayList));
    table=document.getElementById("tbdy");
    table.innerHTML+= `
        <tr id="${i}">
        <td>${i}</td>
        <td>${obj.name}</td>
        <td>${obj.discription}</td>
        <td>${obj.cat}</td>
        <td><input type="submit" value="Update"style="margin-right:30px;" onclick="update(${i});">
        <input type="submit" value="Delete" onclick="del(${i})"></td>
        </tr>
    `;
    i+=1;
}


let read=()=>{
    arrayList=localStorage.getItem("LocalProducts")?
    JSON.parse(localStorage.getItem("LocalProducts")):[];
    table=document.getElementById("tbdy");
    for(let j=0; j<arrayList.length;++j){
        let obj=arrayList[j];
        table.innerHTML+= `
            <tr id="${obj.index}">
            <td>${obj.index}</td>
            <td>${obj.name}</td>
            <td>${obj.discription}</td>
            <td>${obj.cat}</td>
            <td><input type="submit" value="Update"style="margin-right:30px;" onclick="update(${obj.index});">
            <input type="submit" value="Delete" onclick="del(${obj.index})"></td>
            </tr>
        `;
        if(obj.index>=i)i=obj.index+1;
    }
}


let update=(indx)=>{
    let obj=arrayList[indx-1];
    tr=document.getElementById(`${obj.index}`);
    var element = document.getElementById("new");
    element.value="Update"
    element.addEventListener("click",function Update(event){
        console.log(tr.innerHTML); console.log(obj);
        event.preventDefault();
        let Name=document.getElementById("name").value;
        let disc=document.getElementById("desc").value;
        let categ=document.getElementById("category").value;
        tr.innerHTML=`
        <td>${indx}</td>
        <td>${Name}</td>
        <td>${disc}</td>
        <td>${categ}</td>
        <td><input type="submit" value="Update"style="margin-right: 45px;" onclick="update(${obj.index});">
        <input type="submit" value="Delete" onclick="del(${obj.index});"></td>
    `
        obj.name=Name;
        obj.discription=disc;
        obj.cat=categ;
        let intID=setInterval(()=>{
            element.value="Add";
            element.removeEventListener("click", Update);
            clearInterval(intID);
        },2000);
    });

}


let del=(index)=>{
    let tbody=document.getElementById("tbdy");
    tbody.innerHTML='';
    let bool=false;
    for(let j=0; j<arrayList.length;++j){
        let obj=arrayList[j];
        if(bool){
            tbody.innerHTML+=`
            <tr id="${j}">
            <td>${j}</td>
            <td>${obj.name}</td>
            <td>${obj.discription}</td>
            <td>${obj.cat}</td>
            <td><input type="submit" value="Update"style="margin-right:30px;" onclick="update(${j});">
            <input type="submit" value="Delete" onclick="del(${j})"></td>
            </tr>
        `;
            continue;
        }
        if(j===(index-1) && !bool){
            bool=true;
            arrayList.splice(j,1);
            continue;
        }
        tbody.innerHTML+=`
        <tr id="${j+1}">
        <td>${j+1}</td>
        <td>${obj.name}</td>
        <td>${obj.discription}</td>
        <td>${obj.cat}</td>
        <td><input type="submit" value="Update"style="margin-right:30px;" onclick="update(${j+1});">
        <input type="submit" value="Delete" onclick="del(${j+1})"></td>
        </tr>
        `;
    }
    i=arrayList.length;localStorage.setItem("LocalProducts",JSON.stringify(arrayList));
}


let search=()=>{
    let type=document.getElementById("searchForm");
    type.addEventListener("submit",function doWork(event){
        let category=document.getElementById("searchCategory").value;
        let Name='';
        Name=document.getElementById("searchInput").value;
        event.preventDefault();
        let tbody=document.getElementById("tbdy");
        tbody.innerHTML='';
        if(category.toLowerCase()==="all"){
            read();
            return;
        }
        for(let obj of arrayList){
            if(obj.cat.toLowerCase()===category.toLowerCase() && (obj.name.toLowerCase()===Name.toLowerCase() || Name==='')){
                tbody.innerHTML+=`
                <tr id="${obj.index}">
                <td>${obj.index}</td>
                <td>${obj.name}</td>
                <td>${obj.discription}</td>
                <td>${obj.cat}</td>
                <td><input type="submit" value="Update"style="margin-right:30px;" onclick="update(${obj.index});">
                <input type="submit" value="Delete" onclick="del(${obj.index})"></td>
                </tr>
                `;
            }
        }
    })
}



let form = document.getElementById("myform");
form.addEventListener("submit", function(event) {
event.preventDefault();
let Name=document.getElementById("name").value;
let disc=document.getElementById("desc").value;
let categ=document.getElementById("category").value;
let obj={name:Name, discription:disc,cat:categ,index:i}
    create(obj);
});


(()=>{
    read();
})();


search();