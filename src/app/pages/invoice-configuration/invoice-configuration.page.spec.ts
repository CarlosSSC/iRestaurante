import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoiceConfigurationPage } from './invoice-configuration.page';

describe('InvoiceConfigurationPage', () => {
  let component: InvoiceConfigurationPage;
  let fixture: ComponentFixture<InvoiceConfigurationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InvoiceConfigurationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
