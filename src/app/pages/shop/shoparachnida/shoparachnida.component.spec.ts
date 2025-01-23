import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoparachnidaComponent } from './shoparachnida.component';

describe('ShoparachnidaComponent', () => {
  let component: ShoparachnidaComponent;
  let fixture: ComponentFixture<ShoparachnidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoparachnidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoparachnidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
