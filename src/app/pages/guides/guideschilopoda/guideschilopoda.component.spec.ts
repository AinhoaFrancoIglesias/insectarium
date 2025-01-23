import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideschilopodaComponent } from './guideschilopoda.component';

describe('GuideschilopodaComponent', () => {
  let component: GuideschilopodaComponent;
  let fixture: ComponentFixture<GuideschilopodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuideschilopodaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideschilopodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
