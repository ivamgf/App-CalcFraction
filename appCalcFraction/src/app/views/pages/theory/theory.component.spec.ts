import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TheoryComponent } from './theory.component';

describe('TheoryComponent', () => {
  let component: TheoryComponent;
  let fixture: ComponentFixture<TheoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
