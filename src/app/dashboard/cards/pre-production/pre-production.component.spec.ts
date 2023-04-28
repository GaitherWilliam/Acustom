import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreProductionComponent } from './pre-production.component';

describe('PreProductionComponent', () => {
  let component: PreProductionComponent;
  let fixture: ComponentFixture<PreProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
