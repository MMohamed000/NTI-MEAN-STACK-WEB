import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../services/users.services';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.scss'],
  providers:[UsersService]
})
export class UserCreateComponent {
  userForm: FormGroup;

  constructor(private usersService: UsersService) {
    this.userForm = new FormGroup({
      id:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(11)]),
      userName:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(11)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.usersService.createUser(this.userForm.value).subscribe(() => {
        alert('Post created successfully!');
        this.userForm.reset();
      });
    }else{
      alert("plz enter valid info");
      return;
    }
  }
}
