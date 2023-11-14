import { Episodio4listaalumnosComponent } from './pages/episodio4listaalumnos/episodio4listaalumnos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Episodio1incrementablessignalComponent } from './pages/episodio1incrementablessignal/episodio1incrementablessignal.component';
import { Episodio2incrementablesmultiplesComponent } from './pages/episodio2incrementablesmultiples/episodio2incrementablesmultiples.component';
import { ConmutateComponent } from './pages/episodio3incrementablemutate/conmutate/conmutate.component';
import { Episodio5effectComponent } from './pages/episodio5effect/episodio5effect.component';
import { Episodio6advancetopicsComponent } from './pages/episodio6advancetopics/episodio6advancetopics.component';

const routes: Routes = [
  {path:'episodio1',component:Episodio1incrementablessignalComponent},
  {path:'episodio2',component:Episodio2incrementablesmultiplesComponent},
  {path:'episodio3',component:ConmutateComponent},
  {path:'episodio4',component:Episodio4listaalumnosComponent},
  {path:'episodio5',component:Episodio5effectComponent},
  {path:'episodio6',component:Episodio6advancetopicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
