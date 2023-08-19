import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aide002Component } from './aide002.component';

describe('Aide002Component', () => {
  let component: Aide002Component;
  let fixture: ComponentFixture<Aide002Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aide002Component]
    });
    fixture = TestBed.createComponent(Aide002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
