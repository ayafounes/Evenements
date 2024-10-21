import { Component } from '@angular/core';
import { evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html'
  
})
export class EvenementsComponent {
  evenements : evenement[];
  
  constructor(private ett: EvenementService,public authService: AuthService  ){
    this.evenements=this.ett.ListeEvenements();
    
         
    
  
  }
  ngOnInit(): void{
  
  }
  SupprimerEvenement(event:evenement){
    let conf=confirm("Etes-vous sur ?");
    if(conf){
    this.ett.SupprimerEvenement(event);
    }
  }
}
