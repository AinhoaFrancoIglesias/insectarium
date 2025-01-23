import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopdiplopodaComponent } from './shopdiplopoda.component';

describe('ShopdiplopodaComponent', () => {
  let component: ShopdiplopodaComponent;
  let fixture: ComponentFixture<ShopdiplopodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopdiplopodaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopdiplopodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
