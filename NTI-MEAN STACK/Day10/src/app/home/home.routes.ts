import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { StudentsListComponentComponent } from '../students-list-component/students-list-component.component';
import { StudentDetailsComponentComponent } from '../student-details-component/student-details-component.component';

export const HomeRoutes: Routes = [
    {path:'list',loadComponent:()=>import('../students-list-component/students-list-component.component').then((c)=>c.StudentsListComponentComponent)},
    {path:'details/:id',loadComponent:()=>import('../student-details-component/student-details-component.component').then((c)=>c.StudentDetailsComponentComponent)},
    {path:'details/:id/courses',loadComponent:()=>import('../courses-component/courses-component.component').then((c)=>c.CoursesComponentComponent)}
];