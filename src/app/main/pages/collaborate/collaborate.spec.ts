import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Collaborate } from './collaborate';

describe('Collaborate', () => {
  let component: Collaborate;
  let fixture: ComponentFixture<Collaborate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Collaborate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Collaborate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
