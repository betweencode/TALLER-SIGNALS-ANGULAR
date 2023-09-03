/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Episodio4listaalumnosComponent } from './episodio4listaalumnos.component';

describe('Episodio4listaalumnosComponent', () => {
  let component: Episodio4listaalumnosComponent;
  let fixture: ComponentFixture<Episodio4listaalumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Episodio4listaalumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Episodio4listaalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
