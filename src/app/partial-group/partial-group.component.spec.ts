import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialGroupComponent } from './partial-group.component';

describe('PartialGroupComponent', () => {
  let component: PartialGroupComponent;
  let fixture: ComponentFixture<PartialGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
