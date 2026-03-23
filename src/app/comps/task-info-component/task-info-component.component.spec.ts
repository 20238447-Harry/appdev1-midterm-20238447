import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInfoComponentComponent } from './task-info-component.component';

describe('TaskInfoComponentComponent', () => {
  let component: TaskInfoComponentComponent;
  let fixture: ComponentFixture<TaskInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskInfoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
