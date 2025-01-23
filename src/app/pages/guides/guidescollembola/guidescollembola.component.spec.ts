import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidescollembolaComponent } from './guidescollembola.component';

describe('GuidescollembolaComponent', () => {
  let component: GuidescollembolaComponent;
  let fixture: ComponentFixture<GuidescollembolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuidescollembolaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidescollembolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
