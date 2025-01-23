import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideslepidopteraComponent } from './guideslepidoptera.component';

describe('GuideslepidopteraComponent', () => {
  let component: GuideslepidopteraComponent;
  let fixture: ComponentFixture<GuideslepidopteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuideslepidopteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideslepidopteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
