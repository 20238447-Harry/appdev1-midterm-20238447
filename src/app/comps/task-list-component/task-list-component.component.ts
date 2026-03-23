import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../models/task.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task-list-component/task-list-component.component.html'
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id: number) {
    if (confirm('Are you sure?')) {
      this.taskService.deleteTask(id);
      this.tasks = this.taskService.getTasks();
    }
  }

  toggleStatus(id: number) {
    this.taskService.toggleStatus(id);
  }
}