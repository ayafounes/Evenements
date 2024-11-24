
import { Injectable } from '@angular/core';
import { evenement } from '../model/evenement.model';
import { Genre } from '../model/genre.model';
import { GenreWrapper } from '../model/genreWrapped.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  evenements!: evenement[];
  evenement = new evenement();
  genre = new Genre();
  evenementsRecherche: evenement[] = [];
  apiURLGenre: string = 'http://localhost:8091/evenements/genre';
  apiURL: string='http://localhost:8091/evenements/api' ;

  constructor(private http: HttpClient) {}

  ListeEvenements(): Observable<evenement[]> {
    return this.http.get<evenement[]>(this.apiURL);
  }

  ajouterEvenement(event: evenement): Observable<evenement> {
    return this.http.post<evenement>(this.apiURL, event, httpOptions);
  }

  supprimerEvenement(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterEvenement(id: number): Observable<evenement> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<evenement>(url);
  }
  trierEvenement() {
    this.evenements = this.evenements.sort((n1, n2) => {
      if (n1.idEvenement! > n2.idEvenement!) {
        return 1;
      }
      if (n1.idEvenement! < n2.idEvenement!) {
        return -1;
      }
      return 0;
    });
  }

  updateEvenement(event: evenement): Observable<evenement> {
  return this.http.put<evenement>(this.apiURL, event, httpOptions);
}


listeGenres(): Observable<GenreWrapper> {
  return this.http.get<GenreWrapper>(this.apiURLGenre);
}


consulterGenre(id: number): Observable<Genre> {
  const url = `${this.apiURLGenre}/${id}`;
  return this.http.get<Genre>(url);
}


  rechercherParGenre(idGenre: number): Observable<evenement[]> {
    const url = `${this.apiURL}/genre/${idGenre}`;
    return this.http.get<evenement[]>(url);
  }

  /* rechercheParNom(nom: string): Observable<evenement[]> {
    const url = `${apiURL}?nom=${nom}`;
    return this.http.get<evenement[]>(url);
  } */

  ajouterGenre(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>(this.apiURLGenre, genre, httpOptions);
  }
}
