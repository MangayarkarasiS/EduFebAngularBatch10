import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFormArrayComponent } from './cform-array.component';

describe('CFormArrayComponent', () => {
  let component: CFormArrayComponent;
  let fixture: ComponentFixture<CFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CFormArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
