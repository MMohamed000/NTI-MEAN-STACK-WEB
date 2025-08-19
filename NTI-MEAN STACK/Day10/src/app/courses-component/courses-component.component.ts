import { Component } from '@angular/core';
import { StudentsListComponentComponent } from '../students-list-component/students-list-component.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-component',
  standalone: true,
  imports: [],
  templateUrl: './courses-component.component.html',
  styleUrl: './courses-component.component.css'
})

export class CoursesComponentComponent extends  StudentsListComponentComponent{
  selectedStudent:any;
  constructor(private route:ActivatedRoute){
    super();
    const id = this.route.snapshot.paramMap.get('id');
    this.selectedStudent = this.studentsInfo.find((u)=>u.id===id);
    // console.log(this.selectedStudent);
  }
}
