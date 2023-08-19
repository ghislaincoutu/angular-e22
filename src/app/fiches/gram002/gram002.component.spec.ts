import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gram002Component } from './gram002.component';

describe('Gram002Component', () => {
  let component: Gram002Component;
  let fixture: ComponentFixture<Gram002Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gram002Component]
    });
    fixture = TestBed.createComponent(Gram002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
