import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideshymenopteraComponent } from './guideshymenoptera.component';

describe('GuideshymenopteraComponent', () => {
  let component: GuideshymenopteraComponent;
  let fixture: ComponentFixture<GuideshymenopteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuideshymenopteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideshymenopteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
