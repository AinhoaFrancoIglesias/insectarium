import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesmantodeaComponent } from './guidesmantodea.component';

describe('GuidesmantodeaComponent', () => {
  let component: GuidesmantodeaComponent;
  let fixture: ComponentFixture<GuidesmantodeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuidesmantodeaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidesmantodeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
