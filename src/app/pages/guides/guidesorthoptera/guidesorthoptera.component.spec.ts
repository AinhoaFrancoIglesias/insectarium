import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesorthopteraComponent } from './guidesorthoptera.component';

describe('GuidesorthopteraComponent', () => {
  let component: GuidesorthopteraComponent;
  let fixture: ComponentFixture<GuidesorthopteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuidesorthopteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidesorthopteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
