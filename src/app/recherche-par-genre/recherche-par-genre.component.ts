import { Component } from '@angular/core';
import { evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',
  styles: ``
})
export class RechercheParGenreComponent {
  evenements!: evenement[];
  Genres!: Genre[];
  idGenre!: number;

  constructor(private ett: EvenementService) {}

  ngOnInit(): void {
    // Charger les genres via API
    this.ett.listeGenres().subscribe(genre => {
        this.Genres = genre._embedded.genres;  
        console.log('Genres loaded:', this.Genres);
      },
    );}

  onChange(): void {
   
    this.ett.rechercherParGenre(this.idGenre).subscribe(evenements => {
        this.evenements = evenements});
  }

 /*  supprimerEvenement(event: evenement): void {
    let conf = confirm("Etes-vous sur ?");
    if (conf) {
      // Supprimer l'événement via API
      this.ett.supprimerEvenement(event.idEvenement).subscribe(
        () => {
          // Recharger les événements après suppression
          this.ett.rechercherParGenre(this.idGenre).subscribe(
            (data) => {
              this.evenements = data;
            },
            (error) => {
              console.error('Erreur lors de la recherche des événements:', error);
            }
          );
        },
        (error) => {
          console.error('Erreur lors de la suppression de l\'événement:', error);
        }
      );
    }
  } */
}
