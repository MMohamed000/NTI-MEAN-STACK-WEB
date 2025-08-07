(()=>{
    document.body.innerHTML+='<div>Day 5</div>';
})();

var items=[];

function Create(value){
    items.push(value);
}

function Display(){
    items.forEach(element=>console.log(element));
}

function Modify(val,indx){
    if(indx>=0 && indx<items.length)items[indx]=val;
}

function Delete(indx){
    if(indx>=0 && indx<items.length)items.splice(indx,1);
}

// Create(1);Create(2);Create(3);Create(4);
// Display();Modify(1,3);Display();Delete(1);
// Display();