/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConmutateComponent } from './conmutate.component';

describe('ConmutateComponent', () => {
  let component: ConmutateComponent;
  let fixture: ComponentFixture<ConmutateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConmutateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConmutateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
