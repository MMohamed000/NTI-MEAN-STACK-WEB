import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponentComponent } from './student-details-component/student-details-component.component';
import { StudentsListComponentComponent } from './students-list-component/students-list-component.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule,RouterLink,StudentDetailsComponentComponent,StudentsListComponentComponent,AboutComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
}
