import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSmsComponent } from './group-sms.component';

describe('GroupSmsComponent', () => {
  let component: GroupSmsComponent;
  let fixture: ComponentFixture<GroupSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
