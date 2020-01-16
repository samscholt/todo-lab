import { Component, OnInit, Input } from '@angular/core';

import {ITodo} from './ITodo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, ITodo {
  @Input() task : string;
  @Input() completed : boolean;

  constructor() { }

  ngOnInit() {
  }

}
