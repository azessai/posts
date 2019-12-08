import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() date: Date;
  @Input() id: number;

  constructor(private postsService: PostsService ) { }

  ngOnInit() {
  }
  loveIt(){
    this.loveIts += 1;
    this.postsService.updatePost(this.id, this.loveIts);
  }
  dontLoveIt(){
    this.loveIts -= 1;
    this.postsService.updatePost(this.id, this.loveIts);
  }
  supprimerPost() {
    this.postsService.deletePost(this.id);
  }
}
