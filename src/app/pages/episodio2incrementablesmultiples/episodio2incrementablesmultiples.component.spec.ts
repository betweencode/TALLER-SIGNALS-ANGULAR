/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Episodio2incrementablesmultiplesComponent } from './episodio2incrementablesmultiples.component';

describe('Episodio2incrementablesmultiplesComponent', () => {
  let component: Episodio2incrementablesmultiplesComponent;
  let fixture: ComponentFixture<Episodio2incrementablesmultiplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Episodio2incrementablesmultiplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Episodio2incrementablesmultiplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
