import { Component } from '@angular/core';

export class Post {
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.loveIts = 0;
    this.createdAt = new Date();
  }
}
type Posts = Array<Post>;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {

  mesposts: Posts = [ new Post('Mon premier', 'Bla Blad qsd sqd sd qd qd sd qsd qsd dqdsd s. sdqsd '),
                      new Post('mon deuxième', 'Bla Bla'),
                      new Post('mon troisième', 'Bla Bla')];

}
