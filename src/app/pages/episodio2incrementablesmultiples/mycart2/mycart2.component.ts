import { Component, OnInit, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-mycart2',
  templateUrl: './mycart2.component.html',
  styleUrls: ['./mycart2.component.css']
})
export class Mycart2Component implements OnInit {

  @Input()

  public titulo:string = "";
  @Input()
  public subtitulo:string = "";

  @Input()
  public mysignal!: WritableSignal<any>;

  @Input()
  public dimeencuanto:number = 0;

  @Input()
  public consignalupdate:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public myClick(){
    if(!this.consignalupdate){
      this.mysignal.set(this.mysignal()+this.dimeencuanto); //remplaza todo valor con un nuevo valor ---->
    }else{
      this.mysignal.update(actualizacion =>  actualizacion+this.dimeencuanto); //remplaza el nuevo valor tomando en cuenta el valor anterior--->---
    }

  }



}
