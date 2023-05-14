import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogaoutComponent } from './logaout.component';

describe('LogaoutComponent', () => {
  let component: LogaoutComponent;
  let fixture: ComponentFixture<LogaoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogaoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogaoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
