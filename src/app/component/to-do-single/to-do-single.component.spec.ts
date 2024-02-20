import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoSingleComponent } from './to-do-single.component';

describe('ToDoSingleComponent', () => {
  let component: ToDoSingleComponent;
  let fixture: ComponentFixture<ToDoSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoSingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToDoSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
