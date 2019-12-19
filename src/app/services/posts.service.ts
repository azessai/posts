import { Injectable } from '@angular/core';
import { Post } from '../Models/Post';
import { Subject } from 'rxjs';


@Injectable(
{
  providedIn: 'root'
}
)
export class PostsService {

  posts: Post[] = [];
  potsSubject = new Subject<Post[]>();

  constructor() {}
  emitPosts() {
    this.potsSubject.next(this.posts);
  }
  getPosts() {
    this.emitPosts();
  }
  deletePost(id: number) {
    this.posts.splice(id, 1);
    this.savePosts();
    this.emitPosts();
  }
  addPost(post: Post) {
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }
  savePosts() {
  }
  updatePost(id: number, loveIts: number) {
    this.posts[id].loveIts = loveIts;
    this.savePosts();
    this.emitPosts();
  }
}
