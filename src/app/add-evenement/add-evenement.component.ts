import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvenementService } from '../services/evenement.service';
import { evenement } from '../model/evenement.model';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
})
export class AddEvenementComponent implements OnInit {
  genres!: Genre[];
  newIdGenre!: number;
  newEvenement = new evenement();
  evenementForm!: FormGroup;
  newGenre!: Genre;
  constructor(
    private evenementService: EvenementService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // Fetch genres
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
  }

  addEvenement(): void {
    if (this.evenementForm.invalid) {
      // Mark all fields as touched to show validation errors
      this.evenementForm.markAllAsTouched();
      return;
    }
  
    // Populate newEvenement with form values
    this.newEvenement = {
      ...this.evenementForm.value,
      genre: this.genres.find(genre => genre.idGenre === this.evenementForm.value.nomGenre), 
    };
    
  
    // Add the event and reset the form
    this.evenementService.ajouterEvenement(this.newEvenement).subscribe(() => {
      console.log('Événement ajouté avec succès');
      this.evenementForm.reset();
      this.router.navigate(['/evenements']);
    });
  }
  
}
