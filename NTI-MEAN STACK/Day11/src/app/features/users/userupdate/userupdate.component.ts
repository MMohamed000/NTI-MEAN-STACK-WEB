import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../services/users.services';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-update',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,HttpClientModule],
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.scss'],
  providers:[UsersService]
})
export class UsersUpdateComponent implements OnInit {
  UserForm: FormGroup;
  userId: number =0;

  constructor(private usersService: UsersService, private route: ActivatedRoute) {
    this.UserForm = new FormGroup({
      userName:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(11)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
    });
  }

  ngOnInit(): void {
    
    this.route.params.subscribe((params) => {
      this.userId = +params['id'];
      this.getUser(this.userId);
    });

  }

  getUser(id: number) {
    this.usersService.getUser(id).subscribe((data) => {
      console.log(data);
      
      this.UserForm.patchValue({
        userName: data.username,
        email: data.email,
        password:data.password
      });

    });
  }

  onSubmit() {
    if (this.UserForm.valid) {
      this.usersService.updateUser(this.userId, this.UserForm.value).subscribe(() => {
        alert('Post updated successfully!');
      });
    }
  }
}
