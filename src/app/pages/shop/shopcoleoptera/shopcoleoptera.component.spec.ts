import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcoleopteraComponent } from './shopcoleoptera.component';

describe('ShopcoleopteraComponent', () => {
  let component: ShopcoleopteraComponent;
  let fixture: ComponentFixture<ShopcoleopteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopcoleopteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopcoleopteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
