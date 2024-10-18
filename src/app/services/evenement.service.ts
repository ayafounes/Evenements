import { Injectable } from '@angular/core';
import { evenement } from '../model/evenement.model';
import { Genre } from '../model/genre.model';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  evenements: evenement[]; // Array to hold events
  evenement= new evenement();
  genres: Genre[]; // Array to hold genres
  genre= new Genre();
  evenementsRecherche: evenement[] = [];

  constructor() {
    // Initialize the genres array
    this.genres = [
      { idGenre: 1, nomGenre: "pop" },
      { idGenre: 2, nomGenre: "rock" },
      { idGenre: 3, nomGenre: "folk" },
      { idGenre: 4, nomGenre: "electro-pop" }
    ];

    // Initialize the events array
    this.evenements = [
      { idEvenement: 1, nomEvenement: "Taylor Swift", prixEvenement: 500, dateCreation: new Date("12/27/2020"), genre: { idGenre: 1, nomGenre: "pop" } },
      { idEvenement: 2, nomEvenement: "Coldplay", prixEvenement: 600, dateCreation: new Date("12/27/2023"), genre: { idGenre: 2, nomGenre: "rock" } },
      { idEvenement: 3, nomEvenement: "Hozier", prixEvenement: 550, dateCreation: new Date("12/12/2024"), genre: { idGenre: 3, nomGenre: "folk" } },
      { idEvenement: 4, nomEvenement: "Billie Eillish", prixEvenement: 700, dateCreation: new Date("10/12/2024"), genre: { idGenre: 4, nomGenre: "electro-pop" } }
    ];
  }

  // List all events
  ListeEvenements(): evenement[] {
    return this.evenements;
  }

  // Add an event to the list
  ajoutereven(e: evenement) {
    this.evenements.push(e);
  }

  // Remove an event from the list
  SupprimerEvenement(event: evenement) {
    const index = this.evenements.indexOf(event, 0);
    if (index > -1) {
      this.evenements.splice(index, 1);
    }
  }

  // Get event details by ID
  consulterEvenement(id: number): evenement {
    return this.evenements.find(e => e.idEvenement == id)!;
  }

  // Update an event by removing and adding it again
  updateEvenement(e: evenement) {
    this.SupprimerEvenement(e);
    this.ajoutereven(e);
    this.trierEvenements();
  }

  // Sort events by ID
  trierEvenements() {
    this.evenements.sort((n1, n2) => n1.idEvenement - n2.idEvenement);
  }

  // List all available genres
  listeGenres(): Genre[] {
    return this.genres;
  }

  // Get genre details by ID
  consulterGenre(id: number): Genre {
    return this.genres.find(cat => cat.idGenre == id)!;
  }

  // Search events by genre
  rechercherParGenre(idGenre: number): evenement[] {
    this.evenementsRecherche = [];
    
    this.evenements.forEach(cur => {
      if (idGenre == cur.genre.idGenre) {
        console.log("cur " + cur);
        this.evenementsRecherche.push(cur);
      }
    });
    
    return this.evenementsRecherche;
  }
  

  // Search events by name
  rechercheParNom(nom: string): evenement[] {
    if (!nom) {
      return this.evenements; // Return all events if no name is provided
    }
    return this.evenements.filter(event =>
      event.nomEvenement.toLowerCase().includes(nom.toLowerCase())
    );
  }
}
