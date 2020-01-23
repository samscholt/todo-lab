import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularlab1';

  todos = [
    {
      completed: false,
      task: 'Do the laundry'
    },
    {
      completed: true,
      task: 'Watch TV'
    },
    {
      completed: false,
      task: 'Mow the lawn'
    },
    {
      completed: false,
      task: 'Pick up groceries'
    },
    {
      completed: false,
      task: 'Wash dishes'
    },
    {
      completed: true,
      task: 'Clean the bathroom'
    },
  ];

  removeItem(i : number) {
    this.todos.splice(i, 1);
  }

  addTask(addText : string) {
    if (addText) {    // prevents adding an empty string
      this.todos.push({completed: false, task: addText});
    }
  }
}
