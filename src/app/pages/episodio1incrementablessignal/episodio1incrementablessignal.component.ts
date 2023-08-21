import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-episodio1incrementablessignal',
  templateUrl: './episodio1incrementablessignal.component.html',
  styleUrls: ['./episodio1incrementablessignal.component.css']
})
export class Episodio1incrementablessignalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'tallersignal';
  public contador:number = 0;

  public senial = signal(3);


  //-----------------------------------

  public senialmicart = signal(0);

  public contadornormal = 0;

  public darClick():void{
    this.contador ++;
  }

  public darClicksenial():void{
      console.log(this.contador);
      console.log(this.senial());


      //---incremento de la senial

      this.senial.set(this.senial()+1)
  }

  public eventoincrementador(incrementador:number){
   this.contadornormal = incrementador;
  }

}
