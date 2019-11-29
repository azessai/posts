import { Injectable } from '@angular/core';
import { Post } from '../Models/Post';
import { Subject } from 'rxjs';

@Injectable()
export class PostsService {

  posts: Post[];
  potsSubject = new Subject<Post[]>();

  constructor() {
    console.log('INIT Service');
    this.posts = [
      new Post(
        'Mon premier',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      ),
      new Post(
        'Mon second',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit Rymème la plus moche du monde'
      )
    ];
  }
  emitPosts() {
    this.potsSubject.next(this.posts);
  }
  getPosts() {
    this.emitPosts();
  }
  deletePost(id: number) {
    this.posts.splice(id, 1);
    this.emitPosts();
  }
  addPost(post: Post) {
    this.posts = [...this.posts, post];
    console.log(this.posts);
    this.emitPosts();
  }
}
