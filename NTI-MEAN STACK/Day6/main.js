let arrayList=[];

let create=()=>{
    let Name=document.getElementById("name").value;
    let disc=document.getElementById("desc").value;
    let categ=document.getElementById("category").value;
    let i=arrayList.length?arrayList.length:0;
    let obj={name:Name, discription:disc,cat:categ,index:i+1};
    arrayList.push(obj);
    localStorage.setItem("LocalProducts",JSON.stringify(arrayList));
    table=document.getElementById("tbdy");
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

        obj.name=Name!==""?Name:obj.name;
        obj.discription=disc!==""?disc:obj.discription;
        obj.cat=categ!==""?categ:obj.cat;

        tr.innerHTML=`
        <td>${obj.index}</td>
        <td>${obj.name}</td>
        <td>${obj.discription}</td>
        <td>${obj.cat}</td>
        <td><input type="submit" value="Update"style="margin-right: 30px;" onclick="update(${obj.index});">
        <input type="submit" value="Delete" onclick="del(${obj.index});"></td>
    `
    localStorage.setItem("LocalProducts",JSON.stringify(arrayList));
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
    arrayList.splice(index,1);
    for(let j=0; j<arrayList.length;++j){
        let obj=arrayList[j];
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
        obj.index=j+1;
    }
    i=arrayList.length+1;
    localStorage.setItem("LocalProducts",JSON.stringify(arrayList));
}


let search=()=>{
    let type=document.getElementById("searchForm");
    type.addEventListener("submit",function doWork(event){
        let category=document.getElementById("searchCategory").value.trim();
        let Name='';
        Name=document.getElementById("searchInput").value.trim();
        event.preventDefault();
        let tbody=document.getElementById("tbdy");
        tbody.innerHTML='';
        if(category.toLowerCase()==="all"){
            if(Name==="")read();
            else{
                 for(let obj of arrayList){
                    if((obj.name.toLowerCase()===Name.toLowerCase())){
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
            }
            return;
        }
        for(let obj of arrayList){
            if((obj.cat.toLowerCase()===category.toLowerCase()) && (obj.name.toLowerCase()===Name.toLowerCase() || Name==='')){
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
    create();
});


(()=>{
    read();
})();


search();
