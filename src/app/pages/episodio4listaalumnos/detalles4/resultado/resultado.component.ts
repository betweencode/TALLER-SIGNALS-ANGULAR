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




  public alumno:number = 0;
  public materia:number = 0;

  constructor() {

    effect(()=>{
      console.log("DESDE MI COMPONENTE DE RESULTADOS",miSignalmaterias());
      this.miarregloMateriasConeffect = miSignalmaterias();
    })

   }

  ngOnInit() {
  }


  public agregandomateriasalumnos(){

    const alumno:ALUMNOS = this.miarregloSignalalumno().find(s=>s.identificador == this.alumno) || {identificador:0,nombre:""};

    const materia:MATERIAS = this.miarregloMateriasConeffect.find(s=>s.identificador == this.materia) || {identificador:0,nombremateria:""};

    alumno.materias = [...(alumno.materias??[]),materia]


    this.miarregloSignalalumno.mutate(s=>{
      let indice = s.findIndex(m => m.identificador ==alumno.identificador);
      s[indice] = alumno;
    });




  }

}
