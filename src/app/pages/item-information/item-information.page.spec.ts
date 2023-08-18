import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemInformationPage } from './item-information.page';

describe('ItemInformationPage', () => {
  let component: ItemInformationPage;
  let fixture: ComponentFixture<ItemInformationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItemInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
