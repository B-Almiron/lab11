import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  get completedTasks(): Task[] {
    return this.tasks.filter(task => task.completed);
  }
  get incompleteTasks(): Task[] {
    return this.tasks.filter(task => !task.completed);
  }
  toggleTask(task: Task) {
    task.completed = !task.completed;
  }
  
}

interface Task {
  name: string;
  completed: boolean;
}
