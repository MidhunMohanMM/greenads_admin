import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSmsComponent } from './dynamic-sms.component';

describe('DynamicSmsComponent', () => {
  let component: DynamicSmsComponent;
  let fixture: ComponentFixture<DynamicSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
