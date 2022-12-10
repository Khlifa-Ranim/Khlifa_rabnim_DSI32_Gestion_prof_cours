import { Component, OnInit } from '@angular/core';
import { Cours } from '../Model/cours.model';
import { professeur } from '../Model/professeur.model';
import { ProfesseurService } from '../services/professeur.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  nomProf!: string;
  professeur!: professeur[];
  searchTerm!: string;
  allProfesseur!: professeur[];


  constructor(private professeurService: ProfesseurService) { }

  ngOnInit(): void {
    this.professeurService.listeProfesseurs().subscribe(profs => {
      console.log(profs);
      this.professeur = profs;
    });

  }

  rechercherProfs() {
    this.professeurService.rechercherParNom(this.nomProf).
      subscribe(profs => {
        this.professeur = profs;
        console.log(profs)
      });
  }





  onKeyUp(filterText: string) {
    this.professeur = this.allProfesseur.filter(item =>
      item.nomProf.toLowerCase().includes(filterText));
  }


}
