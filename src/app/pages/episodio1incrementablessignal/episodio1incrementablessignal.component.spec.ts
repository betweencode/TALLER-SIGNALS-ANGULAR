/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Episodio1incrementablessignalComponent } from './episodio1incrementablessignal.component';

describe('Episodio1incrementablessignalComponent', () => {
  let component: Episodio1incrementablessignalComponent;
  let fixture: ComponentFixture<Episodio1incrementablessignalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Episodio1incrementablessignalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Episodio1incrementablessignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
