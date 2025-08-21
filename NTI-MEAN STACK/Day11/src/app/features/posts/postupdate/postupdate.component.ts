import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostsService } from '../services/posts.services';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-update',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,HttpClientModule],
  templateUrl: './postupdate.component.html',
  styleUrls: ['./postupdate.component.scss'],
  providers:[PostsService]
})
export class PostUpdateComponent implements OnInit {
  postForm: FormGroup;
  postId: number =0;

  constructor(private postsService: PostsService, private route: ActivatedRoute) {
    this.postForm = new FormGroup({
      userName:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(11)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
    });
  }

  ngOnInit(): void {
    
    this.route.params.subscribe((params) => {
      this.postId = +params['id'];
      this.getPost(this.postId);
    });

  }

  getPost(id: number) {
    this.postsService.getPost(id).subscribe((data) => {
      console.log(data);
      
      this.postForm.patchValue({
        userName: data.username,
        email: data.email,
        password:data.password
      });

    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.postsService.updatePost(this.postId, this.postForm.value).subscribe(() => {
        alert('Post updated successfully!');
      });
    }
  }
}
