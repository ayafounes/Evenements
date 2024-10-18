import { Component } from '@angular/core';
import { evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent {
  nomEvenement!: string;
  evenements!: evenement[];
  allEvenements!: evenement[];
  searchTerm!: string;

  constructor(private ett: EvenementService){
  }

  ngOnInit():void{
    this.evenements=this.ett.ListeEvenements();
  }  

  
    

  onKeyUp(filterText : string){
    this.evenements = this.allEvenements.filter(item =>
    item.nomEvenement.toLowerCase().includes(filterText));
    }
    
}
