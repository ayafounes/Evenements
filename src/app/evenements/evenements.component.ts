import { Component } from '@angular/core';
import { evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';


@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html'
  
})
export class EvenementsComponent {
  evenements : evenement[];
  
  constructor(private produitServices: EvenementService  ){
    this.evenements=this.produitServices.ListeEvenements();
    
         
   
  
  }
  ngOnInit(): void{
  
  }
  SupprimerEvenement(event:evenement){
    let conf=confirm("Etes-vous sur ?");
    if(conf){
    this.produitServices.SupprimerEvenement(event);
    }
  }
}
