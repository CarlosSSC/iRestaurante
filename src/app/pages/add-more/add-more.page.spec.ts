import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMorePage } from './add-more.page';

describe('AddMorePage', () => {
  let component: AddMorePage;
  let fixture: ComponentFixture<AddMorePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddMorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
