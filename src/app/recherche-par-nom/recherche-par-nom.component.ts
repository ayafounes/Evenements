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
  searchTerm: string = ''; // Initialize with an empty string

  constructor(private ett: EvenementService) {}

  ngOnInit(): void {
    this.allEvenements = this.ett.ListeEvenements(); // Load all events initially
    this.evenements = [...this.allEvenements]; // Copy to evenements to show all initially
  }

  onKeyUp(filterText: string): void {
    // If the search term is empty, reset to show all events
    if (filterText.trim() === '') {
      this.evenements = [...this.allEvenements];
    } else {
      // Otherwise, filter the events to show only those that match the search term
      this.evenements = this.allEvenements.filter(item =>
        item.nomEvenement.toLowerCase().includes(filterText.toLowerCase()) // Ensure case insensitivity
      );
    }
  }
}
