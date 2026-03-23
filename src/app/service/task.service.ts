import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    {
      id: 1,
      title: 'Finish project',
      description: 'Complete Angular midterm project',
      dueDate: '2026-03-30',
      status: 'Pending',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Study routing',
      description: 'Understand Angular routing deeply',
      dueDate: '2026-03-25',
      status: 'In Progress',
      priority: 'Medium'
    },
    {
      id: 3,
      title: 'Clean workspace',
      description: 'Organize files and folders',
      dueDate: '2026-03-28',
      status: 'Completed',
      priority: 'Low'
    }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  addTask(task: Task): void {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleStatus(id: number): void {
    const task = this.getTaskById(id);
    if (task) {
      if (task.status === 'Pending') task.status = 'In Progress';
      else if (task.status === 'In Progress') task.status = 'Completed';
      else task.status = 'Pending';
    }
  }
}