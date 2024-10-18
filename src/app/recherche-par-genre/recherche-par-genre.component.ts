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
  evenements !: evenement[];
  Genres!: Genre[];
  idGenre!: number;
  constructor(private ett: EvenementService){}

  ngOnInit(): void {
    this.Genres= this.ett.listeGenres();
    this.evenements= [];
  }

  onChange(){
    this.evenements= this.ett.rechercherParGenre(this.idGenre);
    console.log(this.idGenre);
  }
  SupprimerEvenement(event:evenement){
    let conf=confirm("Etes-vous sur ?");
    if(conf){
    this.ett.SupprimerEvenement(event);
    this.evenements= this.ett.rechercherParGenre(this.idGenre);
    }
  }
  
}
