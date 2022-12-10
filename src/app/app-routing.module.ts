import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesseursComponent } from './professeurs/professeurs.component';
import { AddProfesseurComponent } from './add-professeur/add-professeur.component';
import { UpdateProfesseurComponent } from './update-professeur/update-professeur.component';
import { RechercheParCoursComponent } from './recherche-par-cours/recherche-par-cours.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeCoursComponent } from './liste-cours/liste-cours.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProfesseurGuard } from './professeur.guard';

const routes: Routes = [
  { path: "professeurs", component: ProfesseursComponent },
  { path: "add-professeur", component: AddProfesseurComponent },
  { path: "updateProfesseur/:id", component: UpdateProfesseurComponent },
  { path: "rechercheParCours", component: RechercheParCoursComponent },
  { path: "rechercheParNom", component: RechercheParNomComponent },
  { path: "listeCategories", component: ListeCoursComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  {path : "add-professeur", component : AddProfesseurComponent, canActivate:[ProfesseurGuard]},
  { path: "", redirectTo: "professeurs", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
