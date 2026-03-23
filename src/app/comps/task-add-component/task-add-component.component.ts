import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-add-component.component.html'
})
export class TaskAddComponent {

  // ✅ FIXED: explicitly typed as Task
  task: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    priority: 'Low'
  };

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  addTask() {
    // validation
    if (!this.task.title) {
      alert('Title is required!');
      return;
    }

    // add task
    this.taskService.addTask(this.task);

    alert('Task added!');

    // redirect to list
    this.router.navigate(['/tasks']);
  }
}