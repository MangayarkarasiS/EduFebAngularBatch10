import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewHttpComponent } from './student-view-http.component';

describe('StudentViewHttpComponent', () => {
  let component: StudentViewHttpComponent;
  let fixture: ComponentFixture<StudentViewHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
