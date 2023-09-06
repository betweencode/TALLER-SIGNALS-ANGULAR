import { Component, signal, effect } from '@angular/core';

export var miSignalmaterias = signal<MATERIAS[]>([]);

@Component({
  selector: 'app-listadomaterias',
  templateUrl: './listadomaterias.component.html',
  styleUrls: ['./listadomaterias.component.scss']
})
export class ListadomateriasComponent {

 public nombre:string = "";

 public arreglo:MATERIAS[] = [];

 constructor(){
   effect(()=>{
    console.log("Se modifica la lista de materias",miSignalmaterias());
      this.arreglo = miSignalmaterias();
   });
 }


 public agregar():void{

   miSignalmaterias.mutate((valor)=>{
     valor.push({nombremateria:this.nombre,identificador:valor.length+1});
     this.nombre = "";
   });




 }




}


export interface MATERIAS{
  identificador:number,
  nombremateria:string
}
