import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodio5effectComponent } from './episodio5effect.component';

describe('Episodio5effectComponent', () => {
  let component: Episodio5effectComponent;
  let fixture: ComponentFixture<Episodio5effectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Episodio5effectComponent]
    });
    fixture = TestBed.createComponent(Episodio5effectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
