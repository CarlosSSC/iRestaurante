import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentScreenPage } from './payment-screen.page';

describe('PaymentScreenPage', () => {
  let component: PaymentScreenPage;
  let fixture: ComponentFixture<PaymentScreenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaymentScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
