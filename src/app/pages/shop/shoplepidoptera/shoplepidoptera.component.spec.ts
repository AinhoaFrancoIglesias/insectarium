import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoplepidopteraComponent } from './shoplepidoptera.component';

describe('ShoplepidopteraComponent', () => {
  let component: ShoplepidopteraComponent;
  let fixture: ComponentFixture<ShoplepidopteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoplepidopteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoplepidopteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
