import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonlogaoutComponent } from './buttonlogaout.component';

describe('ButtonlogaoutComponent', () => {
  let component: ButtonlogaoutComponent;
  let fixture: ComponentFixture<ButtonlogaoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonlogaoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonlogaoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
