import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewgrpComponent } from './addnewgrp.component';

describe('AddnewgrpComponent', () => {
  let component: AddnewgrpComponent;
  let fixture: ComponentFixture<AddnewgrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewgrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewgrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
