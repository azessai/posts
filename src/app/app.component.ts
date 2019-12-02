import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyDC0KKDc3IQmb72dcOMbErTOtqyJQVQzPM',
      authDomain: 'posts-9ce0e.firebaseapp.com',
      databaseURL: 'https://posts-9ce0e.firebaseio.com',
      projectId: 'posts-9ce0e',
      storageBucket: 'posts-9ce0e.appspot.com',
      messagingSenderId: '620578461465',
      appId: '1:620578461465:web:7269368098d5b28fa05788',
      measurementId: 'G-0LGW1WL4B6'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
