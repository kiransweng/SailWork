import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathparamsheaderComponent } from './pathparamsheader.component';

describe('PathparamsheaderComponent', () => {
  let component: PathparamsheaderComponent;
  let fixture: ComponentFixture<PathparamsheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathparamsheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathparamsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
