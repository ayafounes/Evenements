import { Component } from '@angular/core';


import { evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
})
export class AddEvenementComponent {
  newEvenement= new evenement();
  message:string="0"


 

constructor(private ett: EvenementService){

}


  addEvenement(){
    this.ett.ajoutereven(this.newEvenement);
    this.message="Evenement"+this.newEvenement.nomEvenement+"ajouté avec succés"
    
  }

}
