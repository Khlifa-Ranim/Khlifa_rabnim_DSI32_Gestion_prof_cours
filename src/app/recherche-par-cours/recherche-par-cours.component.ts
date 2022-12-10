import { Component, OnInit } from '@angular/core';
import { Cours } from '../Model/cours.model';
import { professeur } from '../Model/professeur.model';
import { ProfesseurService } from '../services/professeur.service';

@Component({
  selector: 'app-recherche-par-cours',
  templateUrl: './recherche-par-cours.component.html',
  styleUrls: ['./recherche-par-cours.component.css']
})
export class RechercheParCoursComponent implements OnInit {
  idCours!: number;
  professeur!: professeur[];
  cours!: Cours[];

  constructor(private professeurService: ProfesseurService) { }

  ngOnInit(): void {
    this.professeurService.listeCours().subscribe(cour => {
      this.cours = cour._embedded.courses;
      console.log(cour);
    });

  }

  onChange() {
    this.professeurService.rechercherParCours(this.idCours).
      subscribe(profs => { this.professeur = profs });

  }

}
