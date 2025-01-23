import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopchilopodaComponent } from './shopchilopoda.component';

describe('ShopchilopodaComponent', () => {
  let component: ShopchilopodaComponent;
  let fixture: ComponentFixture<ShopchilopodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopchilopodaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopchilopodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
