import { Routes } from "@angular/router";
import { UsersListComponent } from "./features/users/userslist/userslist.component";
import { UserCreateComponent } from "./features/users/usercreate/usercreate.component";
import { UsersUpdateComponent } from "./features/users/userupdate/userupdate.component";


export const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: UsersListComponent },
    { path: 'create', component: UserCreateComponent },
    { path: 'users/:id', component: UsersUpdateComponent },
];

