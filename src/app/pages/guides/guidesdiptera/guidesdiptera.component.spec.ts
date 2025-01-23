import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesdipteraComponent } from './guidesdiptera.component';

describe('GuidesdipteraComponent', () => {
  let component: GuidesdipteraComponent;
  let fixture: ComponentFixture<GuidesdipteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuidesdipteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidesdipteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
