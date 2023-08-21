/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MicartComponent } from './micart.component';

describe('MicartComponent', () => {
  let component: MicartComponent;
  let fixture: ComponentFixture<MicartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
