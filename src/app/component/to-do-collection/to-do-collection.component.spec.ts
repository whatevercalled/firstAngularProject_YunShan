import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCollectionComponent } from './to-do-collection.component';

describe('ToDoCollectionComponent', () => {
  let component: ToDoCollectionComponent;
  let fixture: ComponentFixture<ToDoCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToDoCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
