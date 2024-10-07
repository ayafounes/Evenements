import { Injectable } from '@angular/core';
import { evenement } from '../model/evenement.model';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  evenements : evenement[];
  



  constructor() {
    this.evenements=[
      {
        idEvenement :1,nomEvenement:"Taylor Swift",prixEvenement:500,dateCreation: new Date("12/27/2020") 
      },
      {idEvenement :2,nomEvenement:"Coldplay",prixEvenement:600,dateCreation: new Date("12/27/2023") },
      {idEvenement :3,nomEvenement:"Hozier",prixEvenement:550,dateCreation: new Date("12/12/2024") },
      {idEvenement :4,nomEvenement:"Billie Eillish",prixEvenement:700,dateCreation: new Date("10/12/2024") },
      {idEvenement :5,nomEvenement:"Olivia Rodrigo",prixEvenement:400,dateCreation: new Date("5/12/2023") },
      
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
}
