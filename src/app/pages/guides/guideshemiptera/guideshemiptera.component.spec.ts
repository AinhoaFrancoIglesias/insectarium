import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideshemipteraComponent } from './guideshemiptera.component';

describe('GuideshemipteraComponent', () => {
  let component: GuideshemipteraComponent;
  let fixture: ComponentFixture<GuideshemipteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuideshemipteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideshemipteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
