import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementsComponent } from './evenements/evenements.component';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';


const routes: Routes = [
  {path : "evenements", component: EvenementsComponent},
  {path : "add-evenements", component: AddEvenementComponent},
  {path:"updateEvenement/:id",component:UpdateEvenementComponent},
  
  {path: "rechercheParGenre", component : RechercheParGenreComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path :"", redirectTo:"evenements", pathMatch:"full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
