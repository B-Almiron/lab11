import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Task[] = [];
  filter: string = 'all';
  addTask(taskName: string) {
    const newTask: Task = { name: taskName, completed: false };
    this.tasks.push(newTask);
  }
  applyFilter(filter: string) {
    this.filter = filter;
  }
  getFilteredTasks(): Task[] {
    if (this.filter === 'completed') {
      return this.tasks.filter((task) => task.completed);
    } else if (this.filter === 'incomplete') {
      return this.tasks.filter((task) => !task.completed);
    } else {
      return this.tasks;
    }
  }
}
interface Task {
  name: string;
  completed: boolean;
}
