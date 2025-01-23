import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcrustaceaComponent } from './shopcrustacea.component';

describe('ShopcrustaceaComponent', () => {
  let component: ShopcrustaceaComponent;
  let fixture: ComponentFixture<ShopcrustaceaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopcrustaceaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopcrustaceaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
