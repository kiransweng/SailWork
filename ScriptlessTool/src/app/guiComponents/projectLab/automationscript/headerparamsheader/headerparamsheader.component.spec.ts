import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderparamsheaderComponent } from './headerparamsheader.component';

describe('HeaderparamsheaderComponent', () => {
  let component: HeaderparamsheaderComponent;
  let fixture: ComponentFixture<HeaderparamsheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderparamsheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderparamsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
