import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopisopodaComponent } from './shopisopoda.component';

describe('ShopisopodaComponent', () => {
  let component: ShopisopodaComponent;
  let fixture: ComponentFixture<ShopisopodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopisopodaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopisopodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
