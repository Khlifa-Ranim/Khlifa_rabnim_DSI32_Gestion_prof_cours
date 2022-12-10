import { Component, OnInit } from '@angular/core';
import { Cours } from '../Model/cours.model';
import { ProfesseurService } from '../services/professeur.service';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent implements OnInit {

  cours!: Cours[];
  updatedCours: Cours = { "idCours": 0, "nomCours": "", "descriptionCours": "" };
  ajout: boolean = true;


  constructor(private professeurService: ProfesseurService) { }

  ngOnInit(): void {
    this.chargerCours();

  }


  coursUpdated(cour: Cours) {
    console.log("cour updated event", cour);
    this.professeurService.ajouterCours(cour).
      subscribe(() => this.chargerCours());
  }

  chargerCours() {
    this.professeurService.listeCours().
      subscribe(cour => {
        this.cours = cour._embedded.courses;
        console.log(cour);
      });
  }
  updateCours(cour: Cours) {
    this.updatedCours = cour;
    this.ajout = false;
  }

  supprimerCours(cour: Cours) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)

      //console.log(p);
      this.professeurService.supprimerCours(cour.idCours).subscribe(() => {
        console.log("cours supprimé");
        this.chargerCours();
      });

  }
}
