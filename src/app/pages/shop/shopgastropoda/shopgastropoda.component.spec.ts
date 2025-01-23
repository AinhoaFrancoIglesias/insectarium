import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopgastropodaComponent } from './shopgastropoda.component';

describe('ShopgastropodaComponent', () => {
  let component: ShopgastropodaComponent;
  let fixture: ComponentFixture<ShopgastropodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopgastropodaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopgastropodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
