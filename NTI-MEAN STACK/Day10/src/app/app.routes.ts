import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HomeRoutes } from './home/home.routes';

export const routes: Routes = [
    // {path:'home',component:HomeComponent},
    // {path:'students/list',component:StudentsListComponentComponent},
    // {path:'students/details',component:StudentDetailsComponentComponent},
    // {path:'about',component:AboutComponent},
    
    {path:'home',loadComponent:()=>import('./home/home.component').then((c)=>c.HomeComponent)},
    {path:'students',redirectTo:'students/list',pathMatch:'full'},
    {path:'students',children:HomeRoutes,},
    {path:'about',loadComponent:()=>import('./about/about.component').then((c)=>c.AboutComponent)},
    {path:'**',loadComponent:()=>import('./not-found-component/not-found-component.component').then((c)=>c.NotFoundComponentComponent)}
];
