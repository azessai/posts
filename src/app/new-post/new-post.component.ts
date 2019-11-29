import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from '../service/posts.service';
import { Post } from '../Models/Post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm = new FormGroup({
    title: new FormControl(null, [
      Validators.required
    ]),
    content: new FormControl(null, [
      Validators.required
    ])
  });
  constructor( private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }
  addPost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new Post(title, content);
    this.postsService.addPost(newPost);
    console.log('Ajouter : ' + title + ' ' + content);
    this.router.navigate(['/posts']);
  }
}
