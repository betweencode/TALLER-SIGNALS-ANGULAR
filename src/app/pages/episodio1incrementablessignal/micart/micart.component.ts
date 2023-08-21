import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-micart',
  templateUrl: './micart.component.html',
  styleUrls: ['./micart.component.css']
})
export class MicartComponent implements OnInit {


  @Input()
  public titulo:string = "";


  @Input()
  public misignal:any;


  @Input()
  public contadornormal:number = 0;


  @Output()
  public salida = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public contador(){
    this.misignal.set(this.misignal()+1)
  }

  public contadorsinsignal():void{

    this.contadornormal++;
    console.log("Si se ejecuta",this.contadornormal);

    this.salida.emit(this.contadornormal);

  }

}
