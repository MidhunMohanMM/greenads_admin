import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBlncComponent } from './account-blnc.component';

describe('AccountBlncComponent', () => {
  let component: AccountBlncComponent;
  let fixture: ComponentFixture<AccountBlncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountBlncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBlncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
