import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DevelopmentComponent } from './development.component';

describe('DevelopmentComponent', () => {
  let component: DevelopmentComponent;
  let fixture: ComponentFixture<DevelopmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
