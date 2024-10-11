import { Injectable } from '@angular/core';
import { evenement } from '../model/evenement.model';
import { Genre } from '../model/genre.model';




@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  evenements : evenement[];
  genres: Genre[];

  constructor() {
    this.genres= [
      {idGenre: 1 ,  nomGenre: "pop"},
      {idGenre: 2 ,  nomGenre: "rock"},
      {idGenre: 3 ,  nomGenre: "folk"},
      {idGenre: 4 ,  nomGenre: "electro-pop"}
    ];

    this.evenements=[
      {
        idEvenement :1,nomEvenement:"Taylor Swift",prixEvenement:500,dateCreation: new Date("12/27/2020"), genre: {idGenre: 1 ,  nomGenre: "pop"}},
      {idEvenement :2,nomEvenement:"Coldplay",prixEvenement:600,dateCreation: new Date("12/27/2023"), genre: {idGenre: 2 ,  nomGenre: "rock"} },
      {idEvenement :3,nomEvenement:"Hozier",prixEvenement:550,dateCreation: new Date("12/12/2024"), genre: {idGenre: 3 ,  nomGenre: "folk"} },
      {idEvenement :4,nomEvenement:"Billie Eillish",prixEvenement:700,dateCreation: new Date("10/12/2024"), genre: {idGenre: 4 ,  nomGenre: "electro-pop"} },
      
    ];

   }
   ListeEvenements():evenement[]{
    return this.evenements;
  }
  ajoutereven(e:evenement){
    this.evenements.push(e);

  }
  SupprimerEvenement(event:evenement){
    const index=this.evenements.indexOf(event,0);
    if(index>-1){
      this.evenements.splice(index,1);
    }
  }  
  consulterEvenement(id:number):evenement{
    return this.evenements.find(e =>e.idEvenement==id)!;
    
  }
  updateEvenement(e:evenement){
    this.SupprimerEvenement(e);
    this.ajoutereven(e);
    this.trierEvenements();

  }

  trierEvenements(){
    this.evenements = this.evenements.sort((n1,n2) => {
    if (n1.idEvenement! > n2.idEvenement!) {
    return 1;
    }
    if (n1.idEvenement! < n2.idEvenement!) {
    return -1;
    }
    return 0;
    });
    }

    listeGenres():Genre[] {
      return this.genres;
      }
    consulterGenre(id:number): Genre{
      return this.genres.find(cat => cat.idGenre == id)!;
      }
}

