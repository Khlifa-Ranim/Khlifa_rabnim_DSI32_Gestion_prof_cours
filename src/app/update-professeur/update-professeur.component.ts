import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from '../Model/cours.model';
import { professeur } from '../Model/professeur.model';
import { ProfesseurService } from '../services/professeur.service';

@Component({
  selector: 'app-update-professeur',
  templateUrl: './update-professeur.component.html',
  styleUrls: ['./update-professeur.component.css']
})
export class UpdateProfesseurComponent implements OnInit {

  currentProfesseur = new professeur();
  cours!: Cours[];
  updatedCourstId!: number;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private professeurService: ProfesseurService) { }

  ngOnInit(): void {

    this.professeurService.listeCours().subscribe(cours => {
      console.log('cours cours1');
      console.log(cours);
      this.cours = cours._embedded.courses;
      console.log(this.cours);
    });

    this.professeurService.consulterProfesseur(this.activatedRoute.snapshot.params['id']).subscribe(prof => {
      this.currentProfesseur = prof;
      this.updatedCourstId = this.currentProfesseur.cours.idCours;
    });
    //this.cours = this.professeurService.listeCours();
    //this.updatedCourstId = this.currentProfesseur.cours.idCours;
    //console.log(this.currentProfesseur);
  }



  updateProfesseur() {
    this.currentProfesseur.cours = this.cours.find(cours => cours.idCours == this.updatedCourstId)!;
    this.professeurService.updateProfesseur(this.currentProfesseur).subscribe(prof => {
      this.router.navigate(['professeurs']);
    }
    );
  }





}
