/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AcenteComponent } from './acente.component';

describe('AcenteComponent', () => {
  let component: AcenteComponent;
  let fixture: ComponentFixture<AcenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
