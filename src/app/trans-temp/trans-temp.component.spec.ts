import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransTempComponent } from './trans-temp.component';

describe('TransTempComponent', () => {
  let component: TransTempComponent;
  let fixture: ComponentFixture<TransTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
