import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesisopodaComponent } from './guidesisopoda.component';

describe('GuidesisopodaComponent', () => {
  let component: GuidesisopodaComponent;
  let fixture: ComponentFixture<GuidesisopodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuidesisopodaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidesisopodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
