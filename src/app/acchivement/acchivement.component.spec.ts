import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcchivementComponent } from './acchivement.component';

describe('AcchivementComponent', () => {
  let component: AcchivementComponent;
  let fixture: ComponentFixture<AcchivementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcchivementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcchivementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
