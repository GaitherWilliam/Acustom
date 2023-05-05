import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProductionComponent } from './post-production.component';

describe('PostProductionComponent', () => {
  let component: PostProductionComponent;
  let fixture: ComponentFixture<PostProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
