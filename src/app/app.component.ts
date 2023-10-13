import { Component } from '@angular/core';
import * as data from './landing/POSTS.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  posts: any = (data as any).default?.articles;

  colors = ["#FF4C4C", "#FFDB20", "#00D254", "#0697FF"]
}
