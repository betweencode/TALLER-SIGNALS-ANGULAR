import { Component, OnInit, WritableSignal,effect } from '@angular/core';
import { ALUMNOS, misignal } from '../listadoalumnos/listadoalumnos.component';
import { MATERIAS, miSignalmaterias } from '../listadomaterias/listadomaterias.component';


var mm:any;



@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  //Primera forma de pasar el signal entre compoentes (GLOBALIZANDOLAS CON VAR)

  public miarregloSignalalumno:WritableSignal<ALUMNOS[]> = misignal;

  public miarregloMateriasConeffect:MATERIAS[] = [];

  constructor() {

    effect(()=>{
      console.log("DESDE MI COMPONENTE DE RESULTADOS",miSignalmaterias());
      this.miarregloMateriasConeffect = miSignalmaterias();
    })

   }

  ngOnInit() {
  }

}
