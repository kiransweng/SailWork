import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstepsComponent } from './addsteps.component';

describe('AddstepsComponent', () => {
  let component: AddstepsComponent;
  let fixture: ComponentFixture<AddstepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
