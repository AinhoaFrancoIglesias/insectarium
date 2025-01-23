import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidescrustaceaComponent } from './guidescrustacea.component';

describe('GuidescrustaceaComponent', () => {
  let component: GuidescrustaceaComponent;
  let fixture: ComponentFixture<GuidescrustaceaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuidescrustaceaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidescrustaceaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
