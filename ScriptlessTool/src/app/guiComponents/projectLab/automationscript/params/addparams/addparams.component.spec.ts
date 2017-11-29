import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddparamsComponent } from './addparams.component';

describe('AddparamsComponent', () => {
  let component: AddparamsComponent;
  let fixture: ComponentFixture<AddparamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddparamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
