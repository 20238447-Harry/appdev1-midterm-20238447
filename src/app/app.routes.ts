import { Routes } from '@angular/router';
import { TaskListComponent } from './comps/task-list-component/task-list-component.component';
import { TaskDetailComponent } from './comps/task-detail-component/task-detail-component.component';
import { TaskInfoComponent } from './comps/task-info-component/task-info-component.component';
import { TaskEditComponent } from './comps/task-edit-component/task-edit-component.component';
import { TaskAddComponent } from './comps/task-add-component/task-add-component.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },

  { path: 'tasks', component: TaskListComponent },

  // 🚨 MUST BE ABOVE :id
  { path: 'tasks/new', component: TaskAddComponent },

  {
    path: 'tasks/:id',
    component: TaskDetailComponent,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: TaskInfoComponent },
      { path: 'edit', component: TaskEditComponent }
    ]
  },

  { path: '**', redirectTo: 'tasks' }
];