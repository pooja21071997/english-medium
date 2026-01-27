import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryAndSecondary } from './primary-and-secondary';

describe('PrimaryAndSecondary', () => {
  let component: PrimaryAndSecondary;
  let fixture: ComponentFixture<PrimaryAndSecondary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryAndSecondary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryAndSecondary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
