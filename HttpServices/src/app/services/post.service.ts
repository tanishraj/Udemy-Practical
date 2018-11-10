import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private baseUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.baseUrl);
  }

  createPost(post){
    return this.http.post(this.baseUrl, JSON.stringify(post));
  }

  updatePost(post){
    return this.http.patch(this.baseUrl + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(post){
    return this.http.delete(this.baseUrl + '/' + post.id);
  }
}
