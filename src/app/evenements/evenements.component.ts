import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../services/evenement.service';
import { AuthService } from '../services/auth.service';
import { evenement } from '../model/evenement.model';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html'
})
export class EvenementsComponent implements OnInit {
  evenements!: evenement[];
  
  constructor(private evenementService: EvenementService, public authService: AuthService) {}

  ngOnInit(): void {
    this.chargerEvenement();
    
  }

  chargerEvenement(): void {
    this.evenementService.ListeEvenements().subscribe(evenements => {
      console.log(evenements);
      this.evenements = evenements;
    });
  }
  
  

  supprimerEvenement(event: evenement) {
    let conf = confirm('Etes-vous sûr de vouloir supprimer cet événement?');
    if (conf) {
      this.evenementService.supprimerEvenement(event.idEvenement).subscribe(
        () => {
          console.log('Evenement supprimé');
          this.chargerEvenement(); // Reload the list after deletion
        },
        
      );
    }
  }
}
