import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopmantodeaComponent } from './shopmantodea.component';

describe('ShopmantodeaComponent', () => {
  let component: ShopmantodeaComponent;
  let fixture: ComponentFixture<ShopmantodeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopmantodeaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopmantodeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
