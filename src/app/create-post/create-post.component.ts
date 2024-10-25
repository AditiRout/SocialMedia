import { Component } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  post: Post = {
    title: '',
    body: '',
    image: ''
  }; 
  submitted: boolean = false;
  myImg: any; 

  constructor(private postS:PostService) {}

 
  onSubmit() {
    if (this.post.title && this.post.body) {
      
      if (this.myImg) {
        this.post.image = this.myImg;
      }

      console.log('Post Created:', this.post);
      this.postS.createPost(this.post).subscribe( 
      (response) => {
        console.log('Post created successfully:', response);
        this.submitted = true; 
      },
      (err) => {
        console.error('Error creating post:', err);
      }
      )
    }
  }

  // Method to handle image upload and preview
  uploadImg(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let img = new Image();
        img.src = e.target.result;
        img.onload = rs => {
          this.myImg = e.target.result; }
      };
      reader.readAsDataURL(fileInput.target.files[0]); 
    }
  }
}
