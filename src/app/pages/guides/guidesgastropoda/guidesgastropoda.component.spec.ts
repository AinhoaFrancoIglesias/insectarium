import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesgastropodaComponent } from './guidesgastropoda.component';

describe('GuidesgastropodaComponent', () => {
  let component: GuidesgastropodaComponent;
  let fixture: ComponentFixture<GuidesgastropodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuidesgastropodaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidesgastropodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
