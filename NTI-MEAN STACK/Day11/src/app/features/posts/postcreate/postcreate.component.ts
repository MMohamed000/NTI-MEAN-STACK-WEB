import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostsService } from '../services/posts.services';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.scss'],
  providers:[PostsService]
})
export class PostCreateComponent {
  postForm: FormGroup;

  constructor(private postsService: PostsService) {
    this.postForm = new FormGroup({
      id:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(11)]),
      userName:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(11)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.postsService.createPost(this.postForm.value).subscribe(() => {
        alert('Post created successfully!');
        this.postForm.reset();
      });
    }else{
      alert("plz enter valid info");
      return;
    }
  }
}
