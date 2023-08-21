import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Episodio1incrementablessignalComponent } from './pages/episodio1incrementablessignal/episodio1incrementablessignal.component';
import { Episodio2incrementablesmultiplesComponent } from './pages/episodio2incrementablesmultiples/episodio2incrementablesmultiples.component';

const routes: Routes = [
  {path:'episodio1',component:Episodio1incrementablessignalComponent},
  {path:'episodio2',component:Episodio2incrementablesmultiplesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
