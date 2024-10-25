import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  postId: number | null = null;
  post: Post | null = null;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.postId = +id;
        this.getPostById(this.postId);
      }
    });
  }

  getPostById(id: number): void {
    this.postService.getPostById(id).subscribe(
      (data: Post) => {
        this.post = data;
      },
      (err) => {
        this.errorMessage = 'Could not fetch the post. Please try again later.';
        console.error(err);
      }
    );
  }
}
