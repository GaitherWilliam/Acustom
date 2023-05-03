import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressReactionsDisplayComponent } from './progress-reactions-display.component';

describe('ProgressReactionsDisplayComponent', () => {
  let component: ProgressReactionsDisplayComponent;
  let fixture: ComponentFixture<ProgressReactionsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressReactionsDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressReactionsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
