import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartScreenPage } from './cart-screen.page';

describe('CartScreenPage', () => {
  let component: CartScreenPage;
  let fixture: ComponentFixture<CartScreenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CartScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
