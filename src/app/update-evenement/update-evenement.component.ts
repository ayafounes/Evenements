import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from '../services/evenement.service';
import { evenement } from '../model/evenement.model';

@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styleUrl: './update-evenement.component.css'
})
export class UpdateEvenementComponent {
  currentEvenement =new evenement();
  constructor(private activatedRoute:ActivatedRoute,
    private produitService:EvenementService,
    private router :Router
  ) {}
  ngOnInit():void{
    this.currentEvenement=this.produitService.consulterEvenement(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentEvenement);


  }
  updateEvenement(){
    this.produitService.updateEvenement(this.currentEvenement);
    this.router.navigate(['evenements']);
  }

}
