import { Component, OnInit } from '@angular/core';

import { professeur } from '../Model/professeur.model';
import { AuthService } from '../services/auth.service';
import { ProfesseurService } from '../services/professeur.service';

@Component({
  selector: 'app-professeurs',
  templateUrl: './professeurs.component.html'
})
export class ProfesseursComponent implements OnInit {

  professeurs?: professeur[];

  constructor(private professeurService: ProfesseurService, public authService: AuthService) {
    //this.professeurs = professeurService.listeProfesseurs();

  }

  ngOnInit(): void {
    this.chargerProfessurs();
  }




  chargerProfessurs() {
    this.professeurService.listeProfesseurs().subscribe(prods => {
      console.log(prods);
      this.professeurs = prods;
    });

  }





  supprimerProfesseur(p: professeur) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)

      //console.log(p);
      this.professeurService.supprimerProfesseur(p.idProf).subscribe(() => {
        console.log("professeur supprimé");
        this.chargerProfessurs();
      });


  }


}
