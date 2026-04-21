import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentcomponent } from './studentcomponent';

describe('Studentcomponent', () => {
  let component: Studentcomponent;
  let fixture: ComponentFixture<Studentcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Studentcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Studentcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
