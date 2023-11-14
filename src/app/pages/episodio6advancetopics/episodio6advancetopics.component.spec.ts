import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodio6advancetopicsComponent } from './episodio6advancetopics.component';

describe('Episodio6advancetopicsComponent', () => {
  let component: Episodio6advancetopicsComponent;
  let fixture: ComponentFixture<Episodio6advancetopicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Episodio6advancetopicsComponent]
    });
    fixture = TestBed.createComponent(Episodio6advancetopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
