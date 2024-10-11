import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from '../services/evenement.service';
import { evenement } from '../model/evenement.model';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styleUrl: './update-evenement.component.css'
})
export class UpdateEvenementComponent {
  currentEvenement =new evenement();
  genre!: Genre[];
  updateGenreId!: number;
  constructor(private activatedRoute:ActivatedRoute,
    private ett:EvenementService,
    private router :Router
  ) {}
  ngOnInit():void{
    this.genre = this.ett.listeGenres();
    this.currentEvenement=this.ett.consulterEvenement(this.activatedRoute.snapshot.params['id']);
    //console.log(this.currentEvenement);
    this.updateGenreId=this.currentEvenement.genre.idGenre;


  }
  updateEvenement(){
    this.ett.updateEvenement(this.currentEvenement);
    this.router.navigate(['evenements']);
    this.currentEvenement.genre=this.ett.consulterGenre(this.updateGenreId);
  }

}
