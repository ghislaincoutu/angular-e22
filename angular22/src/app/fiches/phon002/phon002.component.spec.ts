import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phon002Component } from './phon002.component';

describe('Phon002Component', () => {
  let component: Phon002Component;
  let fixture: ComponentFixture<Phon002Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Phon002Component]
    });
    fixture = TestBed.createComponent(Phon002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
