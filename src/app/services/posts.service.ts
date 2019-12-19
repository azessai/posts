import { Injectable } from '@angular/core';
import { Post } from '../Models/Post';
import { Subject } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/database';

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
    firebase.database().ref('/posts')
    .on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
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
    firebase.database().ref('/posts').set(this.posts);
  }
  updatePost(id: number, loveIts: number) {
    this.posts[id].loveIts = loveIts;
    this.savePosts();
    this.emitPosts();
  }
}
