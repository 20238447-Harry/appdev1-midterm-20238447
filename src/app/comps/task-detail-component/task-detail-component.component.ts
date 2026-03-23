import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { TaskService } from '../../service/task.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './task-detail-component.component.html'
})
export class TaskDetailComponent {

  task?: Task;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(id);

    if (!this.task) {
      alert('Task not found!');
    }
  }
}