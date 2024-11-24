import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/genre.model';
import { EvenementService } from './../services/evenement.service';

@Component({
  selector: 'app-liste-genres',
  templateUrl: './liste-genres.component.html',
  styles: ``
})
export class ListeGenresComponent implements OnInit {

  ajout: boolean = true;
  genres!: Genre[];
  updatedGenre: Genre = {"idGenre": 0, nomGenre: ""};

  constructor(private EvenementService: EvenementService) { }

  ngOnInit(): void {
    this.chargerGenres();
  }

  chargerGenres(): void {
    this.EvenementService.listeGenres().subscribe(genre => {
      this.genres = genre._embedded.genres;
      console.log(this.genres);
    });
  }

  genreUpdated(genre: Genre): void {
    console.log("Genre reçu du composant updateGenre:", genre);
    this.EvenementService.ajouterGenre(genre).subscribe(() => this.chargerGenres());
  }

  updateGenre(genre: Genre): void {
    this.updatedGenre = genre;
    this.ajout = false;
  }
}
