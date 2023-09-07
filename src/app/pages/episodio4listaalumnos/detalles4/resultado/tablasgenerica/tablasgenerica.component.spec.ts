/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TablasgenericaComponent } from './tablasgenerica.component';

describe('TablasgenericaComponent', () => {
  let component: TablasgenericaComponent;
  let fixture: ComponentFixture<TablasgenericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasgenericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasgenericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
