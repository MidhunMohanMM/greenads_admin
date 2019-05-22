import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginApisComponent } from './plugin-apis.component';

describe('PluginApisComponent', () => {
  let component: PluginApisComponent;
  let fixture: ComponentFixture<PluginApisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginApisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
