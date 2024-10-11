import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
})
export class AddEvenementComponent implements OnInit {
  newEvenement = new evenement();
  message: string = "0";
  genres!: Genre[];
  newIdGenre!: number;
  newGenre!: Genre;

  constructor(
    private ett: EvenementService, 
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.genres = this.ett.listeGenres(); 
  }

  addEvenement() {
    this.router.navigate(['/evenements']);
    
    this.ett.ajoutereven(this.newEvenement);
    this.message = "Evenement " + this.newEvenement.nomEvenement + " ajouté avec succès";
   
    this.newGenre= this.ett.consulterGenre(this.newIdGenre);
    this.newEvenement.genre = this.newGenre;
  }
}
