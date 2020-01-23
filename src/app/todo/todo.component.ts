import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {ITodo} from './ITodo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, ITodo {
  @Input() task : string;
  @Input() completed : boolean;
  @Output() deleted = new EventEmitter();

  constructor() { }

  completeTask() {
    this.completed = true;
  }

  onDelete() {
    this.deleted.emit();
  }

  ngOnInit() {
  }

}
