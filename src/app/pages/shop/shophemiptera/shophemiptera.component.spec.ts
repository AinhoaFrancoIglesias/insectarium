import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShophemipteraComponent } from './shophemiptera.component';

describe('ShophemipteraComponent', () => {
  let component: ShophemipteraComponent;
  let fixture: ComponentFixture<ShophemipteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShophemipteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShophemipteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
