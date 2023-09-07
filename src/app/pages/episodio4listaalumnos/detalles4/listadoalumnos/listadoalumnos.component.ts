import { Component, OnInit, signal } from '@angular/core';
import { MATERIAS } from '../listadomaterias/listadomaterias.component';


export  var  misignal = signal<ALUMNOS[]>([]);

@Component({
  selector: 'app-listadoalumnos',
  templateUrl: './listadoalumnos.component.html',
  styleUrls: ['./listadoalumnos.component.css']
})
export class ListadoalumnosComponent implements OnInit {

  public nombre:string = "";

  public arreglo:ALUMNOS[] = [];



  constructor() { }

  ngOnInit() {
  }

  public agregar():void{//Se seteea el signal con SET borrando el dto anterior

    this.arreglo.push({nombre:this.nombre,identificador:this.arreglo.length+1})
    this.nombre = "";

    misignal.set(this.arreglo)
  }

}



export interface ALUMNOS{
  nombre:string,
  identificador:number,
  materias?:MATERIAS[]|undefined
}
