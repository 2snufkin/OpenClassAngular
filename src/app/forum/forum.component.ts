import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  title =  'Hello';
  content = 'this is my first post';
  date = new Date();
  constructor() {

  }

  ngOnInit(): void {
  }

}
