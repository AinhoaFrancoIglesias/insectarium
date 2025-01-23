import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HymenopteraComponent } from './hymenoptera.component';

describe('HymenopteraComponent', () => {
  let component: HymenopteraComponent;
  let fixture: ComponentFixture<HymenopteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HymenopteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HymenopteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
