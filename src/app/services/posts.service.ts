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

  constructor() {
    console.log('INIT Service');
    // this.getPosts();
    // this.posts = [
    //   new Post(
    //     'Mon premier',
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    //   ),
    //   new Post(
    //     'Mon second',
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit Rymème la plus moche du monde'
    //   )
    // ];
  }
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
    console.log(this.posts);
    console.log(post);
    this.posts.push(post);
    console.log(this.posts);
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
