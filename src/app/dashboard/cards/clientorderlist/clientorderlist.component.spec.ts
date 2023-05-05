import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientorderlistComponent } from './clientorderlist.component';

describe('ClientorderlistComponent', () => {
  let component: ClientorderlistComponent;
  let fixture: ComponentFixture<ClientorderlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientorderlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
