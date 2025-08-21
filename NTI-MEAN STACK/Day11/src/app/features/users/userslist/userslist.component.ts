import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../services/users.services';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss'],
  providers:[UsersService]
})
export class UsersListComponent implements OnInit {
  posts: any=[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      {
        next: (data)=>{
          console.log(data);
          this.posts = data || [];
        },
        error: (err)=>{
          console.log(err);
        },
        complete: ()=>{
        }
      }
    );
  }



  deleteUser(id: number) {
    console.log(id);
    
    this.usersService.deleteUser(id).subscribe({
      next: (res)=>{
        console.log(res);
        this.getUsers();
        
      },
      error: (err)=>{
        console.log(err);
        
      },
      complete: ()=>{
        console.log("complete");
        
      }
    });
  }

}
