import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePrimary } from './pre-primary';

describe('PrePrimary', () => {
  let component: PrePrimary;
  let fixture: ComponentFixture<PrePrimary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrePrimary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrePrimary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
