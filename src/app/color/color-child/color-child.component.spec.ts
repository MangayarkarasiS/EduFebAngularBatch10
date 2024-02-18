import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorChildComponent } from './color-child.component';

describe('ColorChildComponent', () => {
  let component: ColorChildComponent;
  let fixture: ComponentFixture<ColorChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
