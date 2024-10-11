import { Genre } from "./genre.model";

export class evenement{
    idEvenement! : number;
    nomEvenement! : string;
    prixEvenement! : number;
    dateCreation!: Date;
    genre!: Genre;
}
