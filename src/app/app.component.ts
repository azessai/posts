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

  mesposts: Posts = [ new Post('Mon premier', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pretium neque. Nulla congue porta neque id egestas. Integer nec massa fringilla, molestie nunc vitae, varius dolor.'),
                      new Post('mon deuxième', 'Suspendisse varius, mi et bibendum facilisis, erat massa tempus enim, eget gravida nisi dolor ac tortor. Vivamus vestibulum id ex sit amet vehicula. Mauris vel euismod ipsum.'),
                      new Post('mon troisième', 'Curabitur massa purus, porta id sodales sit amet, pretium quis odio. In suscipit nunc massa, in sodales nunc mollis nec. Morbi non pellentesque purus.')];

}
