import { Cours } from "./cours.model";

export class professeur {
    idProf!: number;
    nomProf!: string;
    prenomProf!: string;
    cin!: number;
    adresse!: string;
    dateCreation!: Date;
    cours!: Cours;
}