import { Component, CreateSignalOptions, Injector, OnInit, ValueEqualityFn, effect, signal } from '@angular/core';
import  'lodash';
declare var  _:any;

@Component({
  selector: 'app-episodio6advancetopics',
  templateUrl: './episodio6advancetopics.component.html',
  styleUrls: ['./episodio6advancetopics.component.scss']
})
export class Episodio6advancetopicsComponent implements OnInit{



  private datos = signal(["hola"],{equal:_.isEqual});

  constructor(private injecto:Injector){

  }
  ngOnInit(): void {
    this.myeffect();
  }


  private myeffect(){
    effect(()=>{

      console.log("Se efectua mi effect",this.datos());
    },{injector:this.injecto});
  }


  public efecto1(){
       this.datos.set(["hola","santagi"]);
  }

}
