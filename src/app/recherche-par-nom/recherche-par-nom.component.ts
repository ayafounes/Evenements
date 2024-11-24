import { Component, OnInit } from '@angular/core';
import { evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: []
})
export class RechercheParNomComponent implements OnInit {

  evenements!: evenement[];  // To hold the filtered list of events
  allEvenements!: evenement[]; // To hold the original list of events from the API
  searchTerm: string = ''; // Initialize with an empty string

  constructor(private ett: EvenementService) {}

  ngOnInit(): void {
    // Fetch all events from the API
    this.ett.ListeEvenements().subscribe((data: evenement[]) => {
      this.allEvenements = data; // Store the events in the original array
      this.evenements = [...this.allEvenements]; // Copy to evenements to show all initially
    });
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
