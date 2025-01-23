import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidescoleopteraComponent } from './guidescoleoptera.component';

describe('GuidescoleopteraComponent', () => {
  let component: GuidescoleopteraComponent;
  let fixture: ComponentFixture<GuidescoleopteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuidescoleopteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidescoleopteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
