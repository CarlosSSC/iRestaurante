import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigurationTestPage } from './configuration-test.page';

describe('ConfigurationTestPage', () => {
  let component: ConfigurationTestPage;
  let fixture: ComponentFixture<ConfigurationTestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfigurationTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
