import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
})
export class AddEvenementComponent implements OnInit {
  newEvenement = new evenement();
  evenementForm!: FormGroup;
  message: string = '';
  err: string = '';
  genres!: Genre[];
  newGenre!: Genre;
  loading: boolean = false;

  constructor(
    private ett: EvenementService, 
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.genres = this.ett.listeGenres();
    this.evenementForm = this.fb.group({
      idEvenement: ['', [Validators.required, Validators.minLength(1)]],
      nomEvenement: ['', [Validators.required, Validators.minLength(3)]],
      prixEvenement: ['', [Validators.required]],
      dateCreation: ['', Validators.required],
      idGenre: ['', Validators.required]
    });
  }

  addEvenement() {
    if (this.evenementForm.invalid) {
      this.err = 'Veuillez remplir tous les champs obligatoires avec les longueurs minimales requises.';
      return;
    }

    this.loading = true;
    this.err = ''; 

    this.newEvenement.idEvenement = this.evenementForm.value.idEvenement;
    this.newEvenement.nomEvenement = this.evenementForm.value.nomEvenement;
    this.newEvenement.prixEvenement = this.evenementForm.value.prixEvenement;
    this.newEvenement.dateCreation = this.evenementForm.value.dateCreation;
    this.newGenre = this.ett.consulterGenre(this.evenementForm.value.idGenre);
    this.newEvenement.genre = this.newGenre;

    
    this.ett.ajoutereven(this.newEvenement);
    
    
    this.message = `Evenement ${this.newEvenement.nomEvenement} ajouté avec succès`;
    
    
    this.router.navigate(['/evenements']); 

    
    this.evenementForm.reset();
    this.loading = false;
  }
}
