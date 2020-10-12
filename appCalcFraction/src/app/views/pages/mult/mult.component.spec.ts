import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultComponent } from './mult.component';

describe('MultComponent', () => {
  let component: MultComponent;
  let fixture: ComponentFixture<MultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
