import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSmsComponent } from './save-sms.component';

describe('SaveSmsComponent', () => {
  let component: SaveSmsComponent;
  let fixture: ComponentFixture<SaveSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
