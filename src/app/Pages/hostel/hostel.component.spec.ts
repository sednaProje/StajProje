/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HostelComponent } from './hostel.component';

describe('HostelComponent', () => {
  let component: HostelComponent;
  let fixture: ComponentFixture<HostelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
