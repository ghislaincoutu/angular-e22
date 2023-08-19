import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aide003Component } from './aide003.component';

describe('Aide003Component', () => {
  let component: Aide003Component;
  let fixture: ComponentFixture<Aide003Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aide003Component]
    });
    fixture = TestBed.createComponent(Aide003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
