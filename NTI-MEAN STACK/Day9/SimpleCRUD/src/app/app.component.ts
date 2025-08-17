import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  arrayList:any;
  obj:any;
  Name:string;
  disc:string;
  categ:string;
  newButton:string;
  constructor(){
    this.arrayList=this.get();
    this.disc="";
    this.Name="";
    this.categ="";
    this.newButton="Add";
  }
  create=()=>{
    let i=this.arrayList.length?this.arrayList.length:0;
    let obj={name:this.Name, discription:this.disc,cat:this.categ};
    this.arrayList.push(obj);
  }
  set=()=>{
    localStorage.setItem("LocalProducts",JSON.stringify(this.arrayList));
  }
  get=()=>{
    const data = localStorage.getItem("LocalProducts");
    return data ? JSON.parse(data) : [];
  }
  update = (index: number) => {
    this.arrayList[index] = {
      name: this.Name!==""?this.Name:this.arrayList[index].name,
      discription: this.disc!==""?this.disc:this.arrayList[index].discription,
      cat: this.categ!==""? this.categ:this.arrayList[index].cat
    };
    this.set();
  }
  del=(index:number)=>{
    this.arrayList.splice(index,1);
    this.set();
  }
  empty=()=>{
    this.disc="";
    this.Name="";
    this.categ="";
  }


  search=()=>{
  this.arrayList=this.get();
  this.categ = this.categ.trim();
  this.Name = this.Name.trim();

  if (this.categ.toLowerCase() === "all") {
    if (this.Name === "") {
      return;
    }

    this.arrayList = this.arrayList.filter((obj: any) =>
      obj.name.toLowerCase() === this.Name.toLowerCase()
    );
  }

  this.arrayList = this.arrayList.filter((obj:any) =>
    obj.cat.toLowerCase() === this.categ.toLowerCase() &&
    (obj.name.toLowerCase() === this.Name.toLowerCase() || this.Name === "")
  );

}

}
