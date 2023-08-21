import { Component, OnInit, signal } from '@angular/core';
import { Mycart2Component } from './mycart2/mycart2.component';

@Component({
  selector: 'app-episodio2incrementablesmultiples',
  templateUrl: './episodio2incrementablesmultiples.component.html',
  styleUrls: ['./episodio2incrementablesmultiples.component.css'],
})
export class Episodio2incrementablesmultiplesComponent implements OnInit {

  public contador1 = signal(0);
  public contador2 = signal(0);
  public contador3 = signal(0);
  public contador4 = signal(0);
  public contador5 = signal(0);

  constructor() { }

  ngOnInit() {
  }



}
