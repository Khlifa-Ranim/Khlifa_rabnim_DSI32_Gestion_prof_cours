import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cours } from '../Model/cours.model';

@Component({
  selector: 'app-update-cours',
  templateUrl: './update-cours.component.html',
  styleUrls: ['./update-cours.component.css']
})
export class UpdateCoursComponent implements OnInit {
  @Input()
  cours! : Cours;
  @Output() 
 coursUpdated = new EventEmitter<Cours>();
 @Input()
ajout!:boolean;

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCours ",this.cours);

  }

  saveCours(){
    this.coursUpdated.emit(this.cours);
    }

}
