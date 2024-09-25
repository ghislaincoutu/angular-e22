import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phon001Component } from './phon001.component';

describe('Phon001Component', () => {
  let component: Phon001Component;
  let fixture: ComponentFixture<Phon001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Phon001Component]
    });
    fixture = TestBed.createComponent(Phon001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
