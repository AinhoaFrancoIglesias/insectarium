import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopphasmatodeaComponent } from './shopphasmatodea.component';

describe('ShopphasmatodeaComponent', () => {
  let component: ShopphasmatodeaComponent;
  let fixture: ComponentFixture<ShopphasmatodeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopphasmatodeaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopphasmatodeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
