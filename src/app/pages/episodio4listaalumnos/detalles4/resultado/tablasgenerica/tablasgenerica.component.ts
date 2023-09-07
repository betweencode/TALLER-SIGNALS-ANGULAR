import { Component, OnInit, effect } from '@angular/core';
import { ALUMNOS, misignal } from '../../listadoalumnos/listadoalumnos.component';

@Component({
  selector: 'app-tablasgenerica',
  templateUrl: './tablasgenerica.component.html',
  styleUrls: ['./tablasgenerica.component.css']
})
export class TablasgenericaComponent implements OnInit {


  public arreglo:ALUNOSFINALES[] = [];

  constructor() {

    effect(()=>{
        console.log("Dentro de la tabla",misignal());
        this.arreglo = [];
          misignal().forEach(elemento =>{

            if(elemento.materias){
              let obj1:ALUNOSFINALES = {nombre:elemento.nombre,materias:[]};
            elemento.materias?.forEach(m =>{
              if(obj1.materias.some(mm1 => mm1.nombre === m.nombremateria)){
                  const indice = obj1.materias.findIndex(index => index.nombre === m.nombremateria);
                  obj1.materias[indice].cantidad++;
              }else{
                obj1.materias.push({nombre:m.nombremateria,cantidad:1});
              }
            });
            this.arreglo.push(obj1);
            }
          });

        console.log("Termina el signal effect",this.arreglo);
    });


  }

  ngOnInit() {
  }

}


interface ALUNOSFINALES{
  nombre:string,
  materias:MATERIAFINAL[]
}

interface MATERIAFINAL{
  nombre:string,
  cantidad:number
}

