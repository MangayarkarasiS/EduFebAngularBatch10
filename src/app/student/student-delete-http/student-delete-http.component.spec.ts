import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDeleteHttpComponent } from './student-delete-http.component';

describe('StudentDeleteHttpComponent', () => {
  let component: StudentDeleteHttpComponent;
  let fixture: ComponentFixture<StudentDeleteHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDeleteHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDeleteHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
