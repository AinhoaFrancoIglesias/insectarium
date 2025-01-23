import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesphasmatodeaComponent } from './guidesphasmatodea.component';

describe('GuidesphasmatodeaComponent', () => {
  let component: GuidesphasmatodeaComponent;
  let fixture: ComponentFixture<GuidesphasmatodeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuidesphasmatodeaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidesphasmatodeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
