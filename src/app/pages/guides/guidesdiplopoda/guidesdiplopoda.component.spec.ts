import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesdiplopodaComponent } from './guidesdiplopoda.component';

describe('GuidesdiplopodaComponent', () => {
  let component: GuidesdiplopodaComponent;
  let fixture: ComponentFixture<GuidesdiplopodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuidesdiplopodaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidesdiplopodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
