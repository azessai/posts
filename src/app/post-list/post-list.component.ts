import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/Post';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  mesposts: Post[] = [];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsSubscription = this.postsService.potsSubject.subscribe(
      (posts) => {
        this.mesposts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }
}
