import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationscriptComponent } from './automationscript.component';

describe('AutomationscriptComponent', () => {
  let component: AutomationscriptComponent;
  let fixture: ComponentFixture<AutomationscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomationscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomationscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
