import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessNumberComponent } from './guess-number.component';

describe('GuessNumberComponent', () => {
  let component: GuessNumberComponent;
  let fixture: ComponentFixture<GuessNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessNumberComponent]
    });
    fixture = TestBed.createComponent(GuessNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
