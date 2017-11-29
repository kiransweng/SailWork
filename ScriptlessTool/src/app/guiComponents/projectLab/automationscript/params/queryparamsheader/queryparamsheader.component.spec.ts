import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryparamsheaderComponent } from './queryparamsheader.component';

describe('QueryparamsheaderComponent', () => {
  let component: QueryparamsheaderComponent;
  let fixture: ComponentFixture<QueryparamsheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryparamsheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryparamsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
