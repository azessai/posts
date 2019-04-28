import { Component, OnInit } from '@angular/core';
import { Post } from './Models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  mesposts: Post[] = [];
  constructor(){
    this.mesposts.push(new Post('Mon premier', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'));
    this.mesposts.push(new Post('Mon deuxième', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'));
    this.mesposts.push(new Post('Mon 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'));
    this.mesposts.push(new Post('Mon 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'));
    this.mesposts.push(new Post('Mon 5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'));
  }


}
