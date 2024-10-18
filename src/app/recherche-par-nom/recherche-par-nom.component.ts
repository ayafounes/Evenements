import { Component } from '@angular/core';
import { evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: []
})
export class RechercheParNomComponent {
 
  evenements!: evenement[];
  allEvenements!: evenement[]; // Holds the original list of events
  searchTerm!: string ;

  constructor(private ett: EvenementService) {}

  ngOnInit(): void {
    this.allEvenements = this.ett.ListeEvenements(); // Initialize allEvenements
    
  }

  onKeyUp(filterText: string): void {
    // Filter the original array to update the displayed list of events
    this.evenements = this.allEvenements.filter(item =>
      item.nomEvenement.toLowerCase().includes(filterText.toLowerCase()) // Ensure case insensitivity
    );
  }
}
