import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoiceScreenPage } from './invoice-screen.page';

describe('InvoiceScreenPage', () => {
  let component: InvoiceScreenPage;
  let fixture: ComponentFixture<InvoiceScreenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InvoiceScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
