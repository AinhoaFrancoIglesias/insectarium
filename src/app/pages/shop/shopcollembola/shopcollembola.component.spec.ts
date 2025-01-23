import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcollembolaComponent } from './shopcollembola.component';

describe('ShopcollembolaComponent', () => {
  let component: ShopcollembolaComponent;
  let fixture: ComponentFixture<ShopcollembolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopcollembolaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopcollembolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
