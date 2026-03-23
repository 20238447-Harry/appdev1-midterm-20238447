import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-add.component.html'
})
export class TaskAddComponent {

  task = {
    id: 0,
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    priority: 'Low'
  };

  constructor(private taskService: TaskService, private router: Router) {}

  addTask() {
    if (!this.task.title) {
      alert('Title is required!');
      return;
    }

    this.taskService.addTask(this.task);
    alert('Task added!');
    this.router.navigate(['/tasks']);
  }
}