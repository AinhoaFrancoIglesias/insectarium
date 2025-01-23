import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopannelidaComponent } from './shopannelida.component';

describe('ShopannelidaComponent', () => {
  let component: ShopannelidaComponent;
  let fixture: ComponentFixture<ShopannelidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopannelidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopannelidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
