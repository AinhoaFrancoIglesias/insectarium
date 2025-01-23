import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoporthopteraComponent } from './shoporthoptera.component';

describe('ShoporthopteraComponent', () => {
  let component: ShoporthopteraComponent;
  let fixture: ComponentFixture<ShoporthopteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoporthopteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoporthopteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
