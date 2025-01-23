import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesannelidaComponent } from './guidesannelida.component';

describe('GuidesannelidaComponent', () => {
  let component: GuidesannelidaComponent;
  let fixture: ComponentFixture<GuidesannelidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuidesannelidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidesannelidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
