import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aide004Component } from './aide004.component';

describe('Aide004Component', () => {
  let component: Aide004Component;
  let fixture: ComponentFixture<Aide004Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aide004Component]
    });
    fixture = TestBed.createComponent(Aide004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
