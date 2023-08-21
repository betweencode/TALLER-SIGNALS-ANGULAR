/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mycart2Component } from './mycart2.component';

describe('Mycart2Component', () => {
  let component: Mycart2Component;
  let fixture: ComponentFixture<Mycart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mycart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mycart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
