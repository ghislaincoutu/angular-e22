import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aide001Component } from './aide001.component';

describe('Aide001Component', () => {
  let component: Aide001Component;
  let fixture: ComponentFixture<Aide001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aide001Component]
    });
    fixture = TestBed.createComponent(Aide001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
