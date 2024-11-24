import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from './../services/evenement.service';
import { evenement } from '../model/evenement.model';
import { Genre } from '../model/genre.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html'
})
export class UpdateEvenementComponent implements OnInit {
  currentEvenement= new evenement(); // Current event data to edit
  updateGenreId!: number; // Selected genre ID
  genres!: Genre[];
  evenementForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private evenementService: EvenementService,
    private router: Router, private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.evenementService.listeGenres().subscribe(genre => {this.genres = genre._embedded.genres;
      console.log(genre);
    });

    this.evenementForm = this.formBuilder.group({
      idEvenement: ['', []],
      nomEvenement: ['', [Validators.required, Validators.minLength(3)]],
      prixEvenement: ['', [Validators.required]],
      dateCreation: ['', [Validators.required]],
      nomGenre: [null, [Validators.required]],
    });

    this.evenementService.consulterEvenement(this.activatedRoute.snapshot.params['id']).subscribe(evenements => {
      this.currentEvenement=evenements;
      this.updateGenreId=this.currentEvenement.genre.idGenre;
    })
  }
  

  updateEvenement(): void {
    this.currentEvenement.genre = this.genres.find(genre => genre.idGenre == this.updateGenreId)!;
    this.evenementService.updateEvenement(this.currentEvenement).subscribe(evenements => {
       
        this.router.navigate(['/evenements']); }
    );}
  
}
