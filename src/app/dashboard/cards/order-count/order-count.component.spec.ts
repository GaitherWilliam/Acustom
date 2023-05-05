import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCountComponent } from './order-count.component';

describe('OrderCountComponent', () => {
  let component: OrderCountComponent;
  let fixture: ComponentFixture<OrderCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
