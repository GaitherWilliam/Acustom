import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriProductionComponent } from './peri-production.component';

describe('PeriProductionComponent', () => {
  let component: PeriProductionComponent;
  let fixture: ComponentFixture<PeriProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
