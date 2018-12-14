import { catchError } from 'rxjs/operators';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : any;

  constructor(private postService : PostsService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (res) => {
        this.posts = res.json();
      },
      (err) => {
        console.log("Something went wrong", err);
      }
    )
  }

  deletePost(post){
    this.postService.deletePost(post.id).subscribe(
      (res) => {
        this.posts.splice(this.posts.indexOf(post), 1);
      },
      (err:Response) => {
        if(err.status === 404){
          alert("Post is already been deleted.");
        } else{
          console.log("Something went wrong", err);
        }
      }
    )
  }

}
