import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopblattodeaComponent } from './shopblattodea.component';

describe('ShopblattodeaComponent', () => {
  let component: ShopblattodeaComponent;
  let fixture: ComponentFixture<ShopblattodeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopblattodeaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopblattodeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
