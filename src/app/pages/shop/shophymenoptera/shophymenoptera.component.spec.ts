import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShophymenopteraComponent } from './shophymenoptera.component';

describe('ShophymenopteraComponent', () => {
  let component: ShophymenopteraComponent;
  let fixture: ComponentFixture<ShophymenopteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShophymenopteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShophymenopteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
