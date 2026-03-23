import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../service/task.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({

  selector: 'app-task-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-info-component.component.html'
})
export class TaskInfoComponent {

  task?: Task;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(id);
  }
}