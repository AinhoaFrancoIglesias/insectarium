import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopdipteraComponent } from './shopdiptera.component';

describe('ShopdipteraComponent', () => {
  let component: ShopdipteraComponent;
  let fixture: ComponentFixture<ShopdipteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopdipteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopdipteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
