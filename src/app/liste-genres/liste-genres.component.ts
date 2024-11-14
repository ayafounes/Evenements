import { Genre } from '../model/genre.model';
import { EvenementService } from './../services/evenement.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-genres',
  templateUrl: './liste-genres.component.html'
})

export class ListeGenresComponent  {
  genres!: Genre[];
  ajout: boolean=true;

  updatedGenre:Genre = {"idGenre":0,"nomGenre":""};

  nouvelleGenre: Genre = {
    idGenre: 0, // ou une autre valeur par défaut
    nomGenre: '', // ou une valeur par défaut
  };
  constructor(private  EvenementService: EvenementService){}

  
  ngOnInit(): void {this.chargerGenres();}

  ajouterGenre(nouvelleGenres: Genre): void {
    this.EvenementService.ajouterGenre(nouvelleGenres);
    this.chargerGenres(); // Actualise l'affichage de la liste après l'ajout
  }

  genreUpdated(genre:Genre){
    console.log("genre updated event",genre);
    this.EvenementService.ajouterGenre(genre);
    this.chargerGenres();
    }
    chargerGenres(){
      this.genres=this.EvenementService.listeGenres();
      console.log(this.genres);
      }

      updateGenre(genre: Genre) {
        this.updatedGenre=genre;
        this.ajout=false;
        }
    
}
