import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadomateriasComponent } from './listadomaterias.component';

describe('ListadomateriasComponent', () => {
  let component: ListadomateriasComponent;
  let fixture: ComponentFixture<ListadomateriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadomateriasComponent]
    });
    fixture = TestBed.createComponent(ListadomateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
