import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gram001Component } from './gram001.component';

describe('Gram001Component', () => {
  let component: Gram001Component;
  let fixture: ComponentFixture<Gram001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gram001Component]
    });
    fixture = TestBed.createComponent(Gram001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
