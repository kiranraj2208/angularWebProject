import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNotesAreaComponent } from './todo-notes-area.component';

describe('TodoNotesAreaComponent', () => {
  let component: TodoNotesAreaComponent;
  let fixture: ComponentFixture<TodoNotesAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoNotesAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoNotesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
