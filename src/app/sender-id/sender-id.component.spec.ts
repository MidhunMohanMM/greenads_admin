import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderIdComponent } from './sender-id.component';

describe('SenderIdComponent', () => {
  let component: SenderIdComponent;
  let fixture: ComponentFixture<SenderIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenderIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenderIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
