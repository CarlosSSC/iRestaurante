import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderSelectionPage } from './order-selection.page';

describe('OrderSelectionPage', () => {
  let component: OrderSelectionPage;
  let fixture: ComponentFixture<OrderSelectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrderSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
