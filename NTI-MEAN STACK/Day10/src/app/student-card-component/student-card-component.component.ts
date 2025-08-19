import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-card-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-card-component.component.html',
  styleUrl: './student-card-component.component.css'
})
export class StudentCardComponentComponent {
  @Input() StudentID:string="";
  @Input() StudentCourses:any=[];
  @Input() StudentAge:string="";
  @Input() StudentMajor:string="";
  display:boolean=false;
  Display=()=>{
    this.display=true;
  } 
}
