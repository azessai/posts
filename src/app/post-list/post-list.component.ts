import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() date: Date;

  constructor() { }

  ngOnInit() {
  }
  loveIt(){
    this.loveIts += 1;
  }
  dontLoveIt(){
    this.loveIts -= 1;
  }

}
