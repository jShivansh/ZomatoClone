import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPopupComponent } from './buy-popup.component';

describe('BuyPopupComponent', () => {
  let component: BuyPopupComponent;
  let fixture: ComponentFixture<BuyPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
