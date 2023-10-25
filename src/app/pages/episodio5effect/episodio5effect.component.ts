import { Component, Injector, OnInit, effect, signal } from '@angular/core';

@Component({
  selector: 'app-episodio5effect',
  templateUrl: './episodio5effect.component.html',
  styleUrls: ['./episodio5effect.component.scss']
})
export class Episodio5effectComponent implements OnInit{


  public misenial = signal(3);


  constructor(private inject:Injector){

  }
  ngOnInit(): void {
    effect(()=>{
      console.log("Este es el effect")
      //console.log(this.misenial());
      let m = this.misenial();
    },{injector:this.inject})
  }
  public enviar(){
      this.misenial.update((m)=>m+1);
  }
}
