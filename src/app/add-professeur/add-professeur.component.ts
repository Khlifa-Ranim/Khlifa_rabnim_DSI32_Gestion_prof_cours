import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cours } from '../Model/cours.model';
import { professeur } from '../Model/professeur.model';
import { ProfesseurService } from '../services/professeur.service';


@Component({
  selector: 'app-add-professeur',
  templateUrl: './add-professeur.component.html',
  styleUrls: ['./add-professeur.component.css']
})
export class AddProfesseurComponent implements OnInit {


  newprofesseur = new professeur();
  newCour!: Cours;
  cours!: Cours[];
  newIdCours!: number;
  //message :string;


  constructor(private professeurService: ProfesseurService,
    private router: Router) { }



  ngOnInit(): void {

    this.professeurService.listeCours().
      subscribe(cats => {
        this.cours = cats._embedded.courses;
        console.log(cats);
      });
  }
  addProfessuer() {


    this.professeurService.ajouterProfesseur(this.newprofesseur).subscribe(prof => {
      console.log(prof);
      this.router.navigate(['professeurs'])
    });


  }




}
