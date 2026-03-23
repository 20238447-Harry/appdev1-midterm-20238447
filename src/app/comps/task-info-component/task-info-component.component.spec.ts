import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInfoComponent } from './task-info-component.component';

describe('TaskInfoComponentComponent', () => {
  let component: TaskInfoComponent;
  let fixture: ComponentFixture<TaskInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
